import clsx from "clsx";
import { ReactNode } from "react";

import styles from "../styles/components/link.module.scss";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link = ({ href, children, className }: Props) => {
  return (
    <a
      className={clsx(styles.link, className)}
      href={href}
      target="blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
