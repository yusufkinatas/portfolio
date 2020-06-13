import Link from 'next/link';
import Page from '../../components/Page';
import { projects } from '../../lib/projects';

import styles from '../../styles/pages/work/work.module.scss';

function Work() {
  return (
    <Page>
      <div className={styles.root}>
        <div className={styles.projectList}>
          {projects.map(p => (
            <Link key={p.id} href="/work/[id]" as={`/work/${p.id}`}>
              <div className={styles.project} style={{ background: p.color }}>
                <img src={p.logo} />
                <a>{p.title}</a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Work;
