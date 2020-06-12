import Head from 'next/head';
import Page from '../../components/Page';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Link from 'next/link';

function ProjectDetails({ data }) {
  return (
    <Page>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <Link href="/work">
          <h1>X</h1>
        </Link>
        <h1>{data.title}</h1>
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
