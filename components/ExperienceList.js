import { useState, useEffect } from 'react';

import styles from '../styles/components/experience-list.module.scss';
import clsx from 'clsx';
import { experienceList } from '../lib/experiences';

const Experience = ({ id, experienceData, onClick, expandedId }) => {
  const { year, title, company, description } = experienceData;

  const isExpanded = expandedId === id;

  return (
    <div className={styles.experienceRoot} onClick={onClick}>
      <div className={styles.experience}>
        <div className={styles.year}>{year}</div>
        <div className={styles.rightContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.company}>{company}</div>
        </div>
      </div>
      {/* <div>{description}</div> */}
    </div>
  );
};

function ExperienceList() {
  const [expanded, setExpanded] = useState(0);

  const expandExperience = id => setExpanded(oldId => (oldId == id ? 0 : id));

  return (
    <div className={styles.outerContainer}>
      <div>
        {experienceList.map((e, index) => (
          <Experience
            id={index}
            experienceData={e}
            onClick={() => expandExperience(index)}
            expandedId={expanded}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
