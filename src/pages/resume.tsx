import Page from '../components/Page';
import Button from '../components/Button';
import SkillList from 'components/SkillList';
import ExperienceList from 'components/ExperienceList';
import styles from 'styles/pages/resume.module.scss';

function Contact() {
  return (
    <Page>
      <div className={styles.root}>
        <div>
          <div className={styles.title}>In a hurry?</div>
          <Button renderATag link="myresume.pdf">
            RESUME PDF
          </Button>
        </div>
        <ExperienceList />
        <SkillList />
      </div>
    </Page>
  );
}

export default Contact;
