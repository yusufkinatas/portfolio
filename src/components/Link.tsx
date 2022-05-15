import { ReactNode } from 'react';
import styles from '../styles/components/link.module.scss';

interface Props {
  href: string;
  children: ReactNode;
}

function Link({ href, children }: Props) {
  return (
    <a className={styles.link} href={href} target="blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
