import Button from 'components/Button'
import ContentfulContent from 'components/ContentfulContent'
import ContentfulWarning from 'components/ContentfulWarning'
import Page from 'components/Page'
import { contentful } from 'contentful/api'
import { GetPersonQuery } from 'contentful/contentful.graphql.types'
import { GetStaticProps } from 'next'

import styles from 'styles/pages/index.module.scss'

interface PageProps {
  data: GetPersonQuery
}

function About({ data }: PageProps) {
  const person = data.personCollection?.items[0]

  if (!person) return <ContentfulWarning />

  return (
    <Page>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.hi}>Hi, I'm {person.name}</div>
          <div className={styles.title}>{person.title}</div>
          <div className={styles.description}>
            <ContentfulContent data={person.description?.json} />
          </div>
          <Button className={styles.button} link="/work">
            SEE MY WORK
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

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getPerson()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
