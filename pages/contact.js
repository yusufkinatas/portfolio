import Page from '../components/Page';
import Link from '../components/Link';
import styles from '../styles/pages/contact.module.scss';

function Contact() {
  return (
    <Page>
      <div className={styles.root}>
        <p>
          Wanna get in touch?
          <br />
          Send an email to me at{' '}
          <Link href="mailto:yusufkinatas@gmail.com">yusufkinatas@gmail.com</Link>
          <br />
          Don't worry. I check my emails daily.
        </p>
        <p>
          You can also connect with me on{' '}
          <Link href="https://www.linkedin.com/in/yusuf-kinatas/">Linkedin</Link> in seconds
        </p>
        <p>
          Check my <Link href="https://github.com/yusufkinatas">Github</Link> for the latest
          projects.
        </p>
      </div>
    </Page>
  );
}

export default Contact;
