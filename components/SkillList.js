import { useState, useEffect } from 'react';

import styles from '../styles/components/skill-list.module.scss';
import clsx from 'clsx';

let zIndexCounter = 100;

const Section = ({ id, title, content, onClick, expandedId }) => {
  const [zIndex, setZIndex] = useState(1);
  const [hovered, setHovered] = useState(false);

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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ zIndex: zIndex > 1 ? zIndex : hovered ? 10 : 1 }}
      className={clsx(
        styles.sectionContainer,
        positionStyle,
        expandedId === id && styles.expanded,
        hovered && styles.hovered
      )}
      onClick={onClick}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

function SkillList() {
  const [expanded, setExpanded] = useState(0);

  const content = (
    <p>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
      for previewing layouts and visual mockups.
    </p>
  );

  const expandSection = id => setExpanded(oldId => (oldId == id ? 0 : id));

  return (
    <div className={styles.outerContainer}>
      <div className={'container'}>
        <Section
          id={1}
          title="FRONTEND"
          content={content}
          expandedId={expanded}
          onClick={() => expandSection(1)}
        />
        <Section
          id={2}
          title="BACKEND"
          content={content}
          expandedId={expanded}
          onClick={() => expandSection(2)}
        />
        <Section
          id={3}
          title="DESIGN"
          content={content}
          expandedId={expanded}
          onClick={() => expandSection(3)}
        />
        <Section
          id={4}
          title="GENERAL"
          content={content}
          expandedId={expanded}
          onClick={() => expandSection(4)}
        />
      </div>
    </div>
  );
}

export default SkillList;
