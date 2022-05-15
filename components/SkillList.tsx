import { useState, useEffect } from 'react';

import styles from '../styles/components/skill-list.module.scss';
import clsx from 'clsx';
import { skillList } from '../lib/skills';

let zIndexCounter = 100;

interface Props {
  id: number;
  skillData: {
    title: string,
    icon: string,
    list: string[],
  };
  onClick: () => void;
  expandedId: number;
}

const Section = ({ id, skillData, onClick, expandedId }: Props) => {
  const [zIndex, setZIndex] = useState(1);

  const { title, icon, list } = skillData;

  useEffect(() => {
    if (expandedId === id) {
      setZIndex(++zIndexCounter);
    } else {
      setZIndex(0);
    }
  }, [expandedId]);

  let positionStyle;
  if (id === 1) positionStyle = styles.topLeft;
  else if (id === 2) positionStyle = styles.topRight;
  else if (id === 3) positionStyle = styles.bottomLeft;
  else positionStyle = styles.bottomRight;

  return (
    <div
      style={{ zIndex: zIndex > 1 ? zIndex : 1 }}
      className={clsx(styles.sectionContainer, positionStyle, expandedId === id && styles.expanded)}
      onClick={onClick}>
      <div className={styles.cover}>
        <img className={styles.icon} src={icon} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>
        <img className={styles.backgroundIcon} src={icon} />
        {list.map(skill => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

function SkillList() {
  const [expanded, setExpanded] = useState(0);

  const expandSection = (id: number) => setExpanded(oldId => (oldId == id ? 0 : id));

  return (
    <div className={styles.outerContainer}>
      <div>
        <Section
          id={1}
          skillData={skillList.frameworks}
          expandedId={expanded}
          onClick={() => expandSection(1)}
        />
        <Section
          id={2}
          skillData={skillList.ui}
          expandedId={expanded}
          onClick={() => expandSection(2)}
        />
        <Section
          id={3}
          skillData={skillList.data}
          expandedId={expanded}
          onClick={() => expandSection(3)}
        />
        <Section
          id={4}
          skillData={skillList.teamwork}
          expandedId={expanded}
          onClick={() => expandSection(4)}
        />
      </div>
    </div>
  );
}

export default SkillList;
