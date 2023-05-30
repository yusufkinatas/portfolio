import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "../styles/components/page.module.scss";
import ContentfulWarning from "./ContentfulWarning";
import { PageTitle } from "./PageTitle";

interface Props {
  children: ReactNode;
  title: string;
  showContentfulWarning?: boolean;
}

function Page({ children, title, showContentfulWarning }: Props) {
  return (
    <>
      <PageTitle title={title} />
      <motion.div
        className={styles.root}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      >
        {showContentfulWarning ? <ContentfulWarning /> : children}
      </motion.div>
    </>
  );
}

export default Page;
