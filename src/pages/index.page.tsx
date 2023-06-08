import clsx from "clsx";
import { Button } from "components/button/button";
import { ContentfulContent } from "components/contentful-content";
import { Page } from "components/page/page";
import { contentful } from "contentful/api";
import { GetPersonQuery } from "contentful/contentful.graphql.types";
import { GetStaticProps } from "next";

import styles from "./index.module.scss";

interface PageProps {
  data: GetPersonQuery;
}

const About = ({ data }: PageProps) => {
  const person = data.personCollection?.items[0];

  return (
    <Page title="YK | Front End Developer" showContentfulWarning={!person}>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.hi}>Hi, I'm {person?.name}</div>
          <div className={styles.title}>{person?.title}</div>
          <div className={styles.description}>
            <ContentfulContent data={person?.description?.json} />
          </div>

          <Button link="/work">SEE MY WORK</Button>
          <p>or</p>
          {/* <Button
            className={clsx(styles.secondaryButton, styles.me)}
            link="/more"
          >
            LEARN ABOUT ME
          </Button>
          <p>or even</p> */}
          <Button
            className={clsx(styles.secondaryButton, styles.game)}
            link="/games"
          >
            PLAY MINIGAMES
          </Button>
        </div>
        <div className={styles.logo}>
          <img src="/icons/yk-logo.svg" alt="YK Logo" />
        </div>
      </div>
    </Page>
  );
};

export default About;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getPerson();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
