import Page from '../components/Page';
import styles from '../styles/pages/index.module.scss';
import Button from '../components/Button';

function About() {
  return (
    <Page>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.hi}>Hi, I'm Yusuf</div>
          <div className={styles.title}>FRONTEND DEVELOPER</div>
          <div className={styles.description}>
            I create great experiences for
            <br />
            mobile and web
          </div>
          <Button className={styles.button} link="/work">
            SEE MY WORK
          </Button>
        </div>
        <div className={styles.logo}>
          <img src="/icons/yk-logo.svg" />
        </div>
      </div>
    </Page>
  );
}

export default About;
