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
      <a
        href={link}
        target="blank"
        rel="noopener noreferrer"
        className={clsx(styles.root, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={link} className={clsx(styles.root, className)}>
      {children}
    </Link>
  );
};
