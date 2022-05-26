import Button from 'components/Button'
import ContentfulContent from 'components/ContentfulContent'
import Page from 'components/Page'
import { contentful } from 'contentful/api'
import { GetPersonQuery } from 'contentful/contentful.graphql.types'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import styles from 'styles/pages/index.module.scss'

interface PageProps {
  data: GetPersonQuery
}

function About({ data }: PageProps) {
  const person = data.personCollection?.items[0]

  const { t } = useTranslation(['common', 'home'])

  return (
    <Page title="YK | Front End Developer" showContentfulWarning={!person}>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.hi}>{t('home:home_greet', { name: person?.name })}</div>
          <div className={styles.title}>{person?.title}</div>
          <div className={styles.description}>
            <ContentfulContent data={person?.description?.json} />
          </div>
          <Button className={styles.button} link="/work">
            {t('home:home_cta')}
          </Button>
        </div>
        <div className={styles.logo}>
          <img src="/icons/yk-logo.svg" />
        </div>
      </div>
    </Page>
  )
}

export default About

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const data = await contentful.getPerson()

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['common', 'home'])),
      data,
    },
    revalidate: 10,
  }
}
