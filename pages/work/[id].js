import Head from 'next/head';
import Page from '../../components/Page';
import Link from '../../components/Link';
import NextLink from 'next/link';
import { getAllProjectIds, getProjectData, linkTypes } from '../../lib/projects';
import styles from '../../styles/pages/work/work.module.scss';

function ProjectDetails({ data }) {
  return (
    <Page>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <NextLink href="/work">
          <h1>X</h1>
        </NextLink>
        <h1>{data.title}</h1>
        <div>
          {data.links.map(link => {
            let text;
            switch (link.type) {
              case linkTypes.android:
                text = 'Download for Android';
                break;
              case linkTypes.ios:
                text = 'Download for iOS';
                break;
              case linkTypes.web:
                text = 'Visit Website';
                break;
              case linkTypes.github:
                text = 'View Code on Github';
                break;
              default:
                break;
            }

            return (
              <div>
                {/* <img src={`/icons/${link.type}.svg`} style={{filter:""}} /> */}
                <Link href={link.url}>{text}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
}

export function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const data = getProjectData(params.id);

  return {
    props: {
      data,
    },
  };
}

export default ProjectDetails;
