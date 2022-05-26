import Page from 'components/Page'
import { contentful } from 'contentful/api'
import { GetProjectPageQuery } from 'contentful/contentful.graphql.types'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

import styles from 'styles/pages/work/work.module.scss'

interface PageProps {
  data: GetProjectPageQuery
}

function Work({ data }: PageProps) {
  const projects = data.projectPageCollection?.items[0]?.projectsCollection?.items

  const { t } = useTranslation(['work', 'common'])

  return (
    <Page title={`${t('common:common_work')} | YK`} showContentfulWarning={!projects || !projects.length}>
      <div className={styles.root}>
        <h2>{t('work:work_landing_message')}</h2>
        <div className={styles.projectList}>
          {projects?.map((p) => (
            <Link key={p?.slug} href="/work/[slug]" as={`/work/${p?.slug}`} passHref>
              <a>
                <div className={styles.project} style={{ background: p?.primaryColor || '' }}>
                  <img src={p?.logo?.url || ''} />
                  <div className={styles.title}>{p?.name}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default Work

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const data = await contentful.getProjectPage()

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['common', 'work'])),
      data,
    },
    revalidate: 10,
  }
}
