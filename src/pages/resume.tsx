import Page from '../components/Page'
import Button from '../components/Button'
import SkillList from 'components/SkillList'
import ExperienceList from 'components/ExperienceList'
import styles from 'styles/pages/resume.module.scss'
import { contentful } from 'contentful/api'
import { GetResumePageQuery } from 'contentful/contentful.graphql.types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface PageProps {
  data: GetResumePageQuery
}

function Contact({ data }: PageProps) {
  const resume = data.resumePageCollection?.items[0]

  const { t } = useTranslation(['common', 'resume'])

  return (
    <Page title={`${t('common:common_resume')} | YK`} showContentfulWarning={!resume}>
      <div className={styles.root}>
        <div>
          <div className={styles.title}>{t('resume:resume_inAHurry')}</div>
          <Button renderATag link={resume?.resumePdf?.url || ''}>
            {t('resume:resume_pdfCta')}
          </Button>
        </div>
        <ExperienceList data={data} />
        <SkillList data={data} />
      </div>
    </Page>
  )
}

export default Contact

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const data = await contentful.getResumePage()

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['common', 'resume'])),
      data,
    },
    revalidate: 10,
  }
}
