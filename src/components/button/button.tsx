import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "./button.module.scss";

interface Props {
  link: string;
  renderATag?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button = ({ link, renderATag, className, children }: Props) => {
  if (renderATag) {
    return (
      <a href={link} target="blank" rel="noopener noreferrer">
        <div className={clsx(styles.root, className)}>{children}</div>
      </a>
    );
  }

  return (
    <Link href={link}>
      <div className={clsx(styles.root, className)}>{children}</div>
    </Link>
  );
};
