import Page from 'components/Page'
import { contentful } from 'contentful/api'
import { GetProjectBySlugQuery } from 'contentful/contentful.graphql.types'
import NextLink from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from 'styles/pages/work/project-detail.module.scss'
import Error from 'next/error'
import Link from 'components/Link'
import ContentfulContent from 'components/ContentfulContent'
import { Carousel } from 'react-responsive-carousel'
import { useMemo } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultResources } from 'react-i18next'
import { useTranslation } from 'next-i18next'

enum LinkType {
  GITHUB = 'GITHUB',
  GOOGLE_PLAY = 'GOOGLE_PLAY',
  APP_STORE = 'APP_STORE',
  WEBSITE = 'WEBSITE',
}

interface PageProps {
  data: GetProjectBySlugQuery
}

const defaultUrlTitleKeys: Record<LinkType, keyof DefaultResources['work']> = {
  APP_STORE: 'work_app_store',
  GITHUB: 'work_github',
  GOOGLE_PLAY: 'work_google_play',
  WEBSITE: 'work_website',
}

function ProjectDetails({ data }: PageProps) {
  const project = data?.projectCollection?.items[0]

  const { t } = useTranslation('work')

  const carouselItems = useMemo(() => {
    const items = project?.images?.items?.map((img) => (
      <div
        key={img?.url}
        onClick={() => {
          window.open(img?.url || '', 'blank')
        }}
        className={styles.carouselItemWrapper}
      >
        <img src={img?.url || ''} />
      </div>
    ))

    if (project?.youtubeVideoId) {
      items?.unshift(
        <div key="yt" className={styles.carouselItemWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    }

    return items
  }, [project])

  if (!project) return <Error statusCode={404} />

  return (
    <Page title={`${project.name || ''} | YK`}>
      <div className={styles.page}>
        <div className={styles.content}>
          <NextLink href="/work">
            <img className={styles.backButton} src="/icons/arrow-right.svg" />
          </NextLink>

          <div className={styles.header}>
            <img src={project.logo?.url || ''} />
            <div>
              <div className={styles.title}>{project.name}</div>
              <div className={styles.categories}>{project.categories?.join(' | ')}</div>
            </div>
          </div>

          <Carousel swipeable className={styles.carousel} showThumbs={false} infiniteLoop showStatus={false}>
            {carouselItems}
          </Carousel>

          <div className={styles.linksWrapper}>
            {project.urls?.items.map((link, i) => {
              return (
                <Link key={i} className={styles.link} href={link?.url || ''}>
                  <img src={`/icons/${link?.type}.svg`} style={{ filter: '' }} />
                  {link?.title || t(defaultUrlTitleKeys[link?.type as LinkType])}
                </Link>
              )
            })}
          </div>

          <div>
            <div className={styles.title}>{t('work_about')}</div>
            <div className={styles.description}>
              <ContentfulContent data={project.description?.json} />
            </div>
          </div>

          <div>
            <div className={styles.title}>{t('work_tech_title')}</div>
            <div>{t('work_tech_desc')}</div>

            <div className={styles.divider} />

            <ul className={styles.techs}>
              {project.techStack?.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const res = await contentful.getAllProjectSlugs()

  return {
    paths:
      res.projectCollection?.items
        .map((s) => {
          const params = { slug: String(s?.slug) }

          return [
            { params, locale: 'en' },
            { params, locale: 'tr' },
          ]
        })
        .flat() || [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PageProps, { slug: string }> = async ({ locale, params }) => {
  const data = await contentful.getProjectBySlug({ slug: params?.slug })

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['common', 'work'])),
      data,
    },
    revalidate: 10,
  }
}

export default ProjectDetails
