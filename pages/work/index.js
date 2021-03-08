import Link from 'next/link';
import Page from '../../components/Page';
import { projects } from '../../lib/projects';

import styles from '../../styles/pages/work/work.module.scss';

function Work() {
  return (
    <Page>
      <div className={styles.root}>
      <h2>Here is some of my best projects</h2>
        <div className={styles.projectList}>
          {projects.map(p => (
            <a href={p.links[0].url} target="_" >
            <div>
              <div className={styles.project} style={{ background: p.color }}>
                <img src={p.logo} />
                <div className={styles.title}>{p.title}</div>
              </div>
            </div>
            </a>
          ))}
          {/* {projects.map(p => (
            <Link key={p.id} href="/work/[id]" as={`/work/${p.id}`}>
              <div className={styles.project} style={{ background: p.color }}>
                <img src={p.logo} />
                <div className={styles.title}>{p.title}</div>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </Page>
  );
}

export default Work;
