import Head from 'next/head'
import Page from 'components/Page'
import { contentful } from 'contentful/api'
import { GetProjectBySlugQuery } from 'contentful/contentful.graphql.types'
import NextLink from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from 'styles/pages/work/project-detail.module.scss'
import Error from 'next/error'
import Link from 'components/Link'
import ContentfulContent from 'components/ContentfulContent'

enum LinkType {
  GITHUB = 'GITHUB',
  GOOGLE_PLAY = 'GOOGLE_PLAY',
  APP_STORE = 'APP_STORE',
  WEBSITE = 'WEBSITE',
}

interface PageProps {
  data: GetProjectBySlugQuery
}

function ProjectDetails({ data }: PageProps) {
  const project = data?.projectCollection?.items[0]

  if (!project) return <Error statusCode={404} />

  return (
    <Page>
      <Head>
        <title>Project: {project.name}</title>
      </Head>
      <div className={styles.page}>
        <div className={styles.content}>
          <NextLink href="/work">
            <img className={styles.backButton} src="/icons/arrow-right.svg" />
          </NextLink>

          <div>
            <img src={project.logo?.url || ''} />
            <div>
              <h1>{project.name}</h1>
              <div>{project.categories?.join(' | ')}</div>
            </div>
          </div>

          <div className={styles.linksWrapper}>
            {project.urls?.items.map((link) => {
              let text
              switch (link?.type as LinkType) {
                case LinkType.GOOGLE_PLAY:
                  text = 'Download for Android'
                  break
                case LinkType.APP_STORE:
                  text = 'Download for iOS'
                  break
                case LinkType.WEBSITE:
                  text = 'Visit Website'
                  break
                case LinkType.GITHUB:
                  text = 'View Code on Github'
                  break
                default:
                  break
              }

              return (
                <Link className={styles.link} href={link?.url || ''}>
                  <img src={`/icons/${link?.type}.svg`} style={{ filter: '' }} />
                  {link?.title || text}
                </Link>
              )
            })}
          </div>

          <h2>About Project</h2>
          <ContentfulContent data={project.description?.json} />

          <h2>Technologies</h2>
          <div>Code technologies and skills I got involved while working on this project</div>

          <ul>
            {project.techStack?.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await contentful.getAllProjectSlugs()

  return {
    paths: res.projectCollection?.items.map((s) => ({ params: { slug: String(s?.slug) } })) || [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PageProps, { slug: string }> = async (ctx) => {
  const data = await contentful.getProjectBySlug({ slug: ctx.params?.slug })

  return {
    props: {
      data,
    },
  }
}

export default ProjectDetails
