import Link from 'next/link';
import Page from '../../components/Page';
import { projects } from '../../lib/projects';

function Work() {
  return (
    <Page>
      <div>
        {projects.map(p => (
          <Link href="/work/[id]" as={`/work/${p.id}`}>
            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                padding: 20,
                margin: 20,
                background: p.color,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img src={p.logo} style={{ width: 80 }} />
              <a>{p.title}</a>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}

export default Work;
