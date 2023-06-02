import { GetResumePageQuery } from "contentful/contentful.graphql.types";

import styles from "./experience-list.module.scss";

interface ExperienceProps {
  year: string;
  company: string;
  title: string;
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
  );
};

export const ExperienceList = ({ data }: { data: GetResumePageQuery }) => {
  const resume = data.resumePageCollection?.items[0];

  return (
    <div className={styles.outerContainer}>
      {resume?.experiencesCollection?.items.map((exp) => (
        <Experience
          key={exp?.company}
          year={exp?.year ?? ""}
          company={exp?.company ?? ""}
          title={exp?.title ?? ""}
        />
      ))}
    </div>
  );
};
