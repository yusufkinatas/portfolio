import { useState, useEffect } from 'react'

import styles from '../styles/components/skill-list.module.scss'
import clsx from 'clsx'
import { GetResumePageQuery } from 'contentful/contentful.graphql.types'

let zIndexCounter = 100

interface Props {
  id: number
  skillData: {
    title: string
    icon: string
    list: string[]
  }
  onClick: () => void
  expandedId: number
}

const Section = ({ id, skillData, onClick, expandedId }: Props) => {
  const [zIndex, setZIndex] = useState(1)

  const { title, icon, list } = skillData

  useEffect(() => {
    if (expandedId === id) {
      setZIndex(++zIndexCounter)
    } else {
      setZIndex(0)
    }
  }, [expandedId, id])

  let positionStyle
  if (id === 1) positionStyle = styles.topLeft
  else if (id === 2) positionStyle = styles.topRight
  else if (id === 3) positionStyle = styles.bottomLeft
  else positionStyle = styles.bottomRight

  return (
    <div
      style={{ zIndex: zIndex > 1 ? zIndex : 1 }}
      className={clsx(styles.sectionContainer, positionStyle, expandedId === id && styles.expanded)}
      onClick={onClick}
    >
      <div className={styles.cover}>
        <img className={styles.icon} src={icon} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>
        <img className={styles.backgroundIcon} src={icon} />
        {list.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSkillList = (skillList: any) => {
  return {
    icon: skillList?.icon?.url,
    list: skillList?.skills,
    title: skillList?.title,
  }
}

function SkillList({ data }: { data: GetResumePageQuery }) {
  const [expanded, setExpanded] = useState(0)

  const expandSection = (id: number) => setExpanded((oldId) => (oldId === id ? 0 : id))

  const resume = data.resumePageCollection?.items[0]

  const { skillList1, skillList2, skillList3, skillList4 } = resume || {}

  return (
    <div className={styles.outerContainer}>
      <div>
        <Section id={1} skillData={parseSkillList(skillList1)} expandedId={expanded} onClick={() => expandSection(1)} />
        <Section id={2} skillData={parseSkillList(skillList2)} expandedId={expanded} onClick={() => expandSection(2)} />
        <Section id={3} skillData={parseSkillList(skillList3)} expandedId={expanded} onClick={() => expandSection(3)} />
        <Section id={4} skillData={parseSkillList(skillList4)} expandedId={expanded} onClick={() => expandSection(4)} />
      </div>
    </div>
  )
}

export default SkillList
