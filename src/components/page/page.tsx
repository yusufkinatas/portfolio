import { m } from "framer-motion";
import { ReactNode } from "react";

import { ContentfulWarning } from "../contentful-warning";
import { PageTitle } from "../page-title";
import styles from "./page.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  showContentfulWarning?: boolean;
}

export const Page = ({ children, title, showContentfulWarning }: Props) => {
  return (
    <>
      <PageTitle title={title} />
      <m.div
        className={styles.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      >
        {showContentfulWarning ? <ContentfulWarning /> : children}
      </m.div>
    </>
  );
};
