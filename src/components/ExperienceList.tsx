import styles from '../styles/components/experience-list.module.scss'
import { GetResumePageQuery } from 'contentful/contentful.graphql.types'

interface ExperienceProps {
  year: string
  company: string
  title: string
}

const Experience = ({ year, company, title }: ExperienceProps) => {
  return (
    <div className={styles.experienceRoot}>
      <div className={styles.experience}>
        <div className={styles.year}>{year}</div>
        <div className={styles.rightContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.company}>{company}</div>
        </div>
      </div>
    </div>
  )
}

function ExperienceList({ data }: { data: GetResumePageQuery }) {
  const resume = data.resumePageCollection?.items[0]

  return (
    <div className={styles.outerContainer}>
      {resume?.experiencesCollection?.items.map((e, index) => (
        <Experience key={index} year={e?.year || ''} company={e?.company || ''} title={e?.title || ''} />
      ))}
    </div>
  )
}

export default ExperienceList
