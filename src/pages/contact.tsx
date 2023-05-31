import { ContentfulContent } from "components/contentful-content";
import { Page } from "components/page";
import { contentful } from "contentful/api";
import { GetPersonQuery } from "contentful/contentful.graphql.types";
import { GetStaticProps } from "next";
import styles from "styles/pages/contact.module.scss";

interface PageProps {
  data: GetPersonQuery;
}

const Contact = ({ data }: PageProps) => {
  const person = data.personCollection?.items[0];

  return (
    <Page showContentfulWarning={!person} title="Contact | YK">
      <div className={styles.root}>
        <ContentfulContent data={person?.contactText?.json} />
      </div>
    </Page>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getPerson();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
