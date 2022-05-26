import Page from 'components/Page'
import styles from 'styles/pages/contact.module.scss'
import { GetStaticProps } from 'next'
import { GetPersonQuery } from 'contentful/contentful.graphql.types'
import { contentful } from 'contentful/api'
import ContentfulContent from 'components/ContentfulContent'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface PageProps {
  data: GetPersonQuery
}

function Contact({ data }: PageProps) {
  const person = data.personCollection?.items[0]

  const { t } = useTranslation('common')

  return (
    <Page showContentfulWarning={!person} title={`${t('common_contact')} | YK`}>
      <div className={styles.root}>
        <ContentfulContent data={person?.contactText?.json} />
      </div>
    </Page>
  )
}

export default Contact

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const data = await contentful.getPerson()

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['common'])),
      data,
    },
    revalidate: 10,
  }
}
