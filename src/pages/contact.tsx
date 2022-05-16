import Page from 'components/Page'
import styles from 'styles/pages/contact.module.scss'
import { GetStaticProps } from 'next'
import { GetPersonQuery } from 'contentful/contentful.graphql.types'
import { contentful } from 'contentful/api'
import ContentfulWarning from 'components/ContentfulWarning'
import ContentfulContent from 'components/ContentfulContent'

interface PageProps {
  data: GetPersonQuery
}

function Contact({ data }: PageProps) {
  const person = data.personCollection?.items[0]

  if (!person) return <ContentfulWarning />

  return (
    <Page>
      <div className={styles.root}>
        <ContentfulContent data={person?.contactText?.json} />
      </div>
    </Page>
  )
}

export default Contact

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getPerson()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
