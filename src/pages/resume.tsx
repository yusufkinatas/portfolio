import Page from "../components/Page";
import Button from "../components/Button";
import SkillList from "components/SkillList";
import ExperienceList from "components/ExperienceList";
import styles from "styles/pages/resume.module.scss";
import { contentful } from "contentful/api";
import { GetResumePageQuery } from "contentful/contentful.graphql.types";
import { GetStaticProps } from "next";

interface PageProps {
  data: GetResumePageQuery;
}

function Contact({ data }: PageProps) {
  const resume = data.resumePageCollection?.items[0];

  return (
    <Page title="Resume | YK" showContentfulWarning={!resume}>
      <div className={styles.root}>
        <div>
          <div className={styles.title}>In a hurry?</div>
          <Button renderATag link={resume?.resumePdf?.url || ""}>
            RESUME PDF
          </Button>
        </div>
        <ExperienceList data={data} />
        <SkillList data={data} />
      </div>
    </Page>
  );
}

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
