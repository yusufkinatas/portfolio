import styles from '../styles/components/experience-list.module.scss'
import { experienceList } from '../lib/experiences'

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

function ExperienceList() {
  return (
    <div className={styles.outerContainer}>
      {experienceList.map((e, index) => (
        <Experience key={index} {...e} />
      ))}
    </div>
  )
}

export default ExperienceList
