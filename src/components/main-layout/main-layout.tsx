import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "./main-layout.module.scss";

interface Props {
  route: string;
  children: ReactNode;
}

export const MainLayout = ({ children, route }: Props) => {
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
      {children}
    </div>
  );
};
