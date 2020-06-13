import styles from '../styles/components/link.module.scss';

function Link({ href, children }) {
  return (
    <a className={styles.link} href={href} target="blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Link;
