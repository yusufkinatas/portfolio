import Link from 'next/link';
import styles from '../styles/components/button.module.scss';
import clsx from 'clsx';

function Button({ link, className, children }) {
  return (
    <Link href={link}>
      <div className={clsx(styles.root, className)}>{children}</div>
    </Link>
  );
}

export default Button;
