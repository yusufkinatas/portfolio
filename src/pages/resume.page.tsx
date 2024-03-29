import { Button } from "components/button/button";
import { ExperienceList } from "components/experience-list/experience-list";
import { Page } from "components/page/page";
import { SkillList } from "components/skill-list/skill-list";
import { contentful } from "contentful/api";
import { GetResumePageQuery } from "contentful/contentful.graphql.types";
import { GetStaticProps } from "next";

import styles from "./resume.module.scss";

interface PageProps {
  data: GetResumePageQuery;
}

const Contact = ({ data }: PageProps) => {
  const resume = data.resumePageCollection?.items[0];

  return (
    <Page title="Resume | YK" showContentfulWarning={!resume}>
      <div className={styles.root}>
        <div className={styles.pdfCta}>
          <div className={styles.title}>In a hurry?</div>
          <Button renderATag link={resume?.resumePdf?.url ?? ""}>
            RESUME PDF
          </Button>
        </div>

        <ExperienceList data={data} />
        <SkillList data={data} />
      </div>
    </Page>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getResumePage();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
