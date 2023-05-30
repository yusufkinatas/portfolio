import { AnimatePresence } from "framer-motion";
import Link from "next/link";

import styles from "../styles/components/main-layout.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  route: string;
  children: ReactNode;
}

function MainLayout({ children, route }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <Link href="/">
            <div className={clsx(route === "/" && styles.active)}>about</div>
          </Link>
          <Link href="/work">
            <div className={clsx(route === "/work" && styles.active)}>work</div>
          </Link>
          <Link href="/resume">
            <div className={clsx(route === "/resume" && styles.active)}>
              resume
            </div>
          </Link>
          <Link href="/contact">
            <div className={clsx(route === "/contact" && styles.active)}>
              contact
            </div>
          </Link>
        </div>
      </div>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}

export default MainLayout;
