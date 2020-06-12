import Page from '../components/Page';

function Contact() {
  return (
    <Page>
      <div>
        <div>Wanna get in touch?</div>
        <div>
          Send an email to me at{' '}
          <a href="mailto:yusufkinatas@gmail.com" target="_blank" rel="noopener noreferrer">
            yusufkinatas@gmail.com
          </a>
        </div>
        <div>Don't worry. I check my emails daily.</div>
        <br />
        <div>
          You can also connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/yusuf-kinatas/"
            target="_blank"
            rel="noopener noreferrer">
            Linkedin
          </a>{' '}
          in seconds
        </div>
        <br />
        <div>
          Check my{' '}
          <a href="https://github.com/yusufkinatas" target="_blank" rel="noopener noreferrer">
            Github
          </a>{' '}
          for the latest projects.
        </div>
      </div>
    </Page>
  );
}

export default Contact;
