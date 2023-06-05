import clsx from "clsx";

import styles from "./experience-list.module.scss";

interface ExperienceItemProps {
  year: string;
  company: string;
  title: string;
  onClick: () => void;
  focused: boolean;
}

export const ExperienceItem = ({
  year,
  company,
  title,
  focused,
  onClick,
}: ExperienceItemProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(styles.experienceItem, focused && styles.focused)}
    >
      <div className={styles.experience}>
        <div className={styles.year}>{year}</div>
        <div className={styles.rightContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.company}>{company}</div>
        </div>
      </div>
    </div>
  );
};
