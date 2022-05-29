import clsx from 'clsx'
import Page from 'components/Page'
import { contentful } from 'contentful/api'
import { GetProjectPageQuery } from 'contentful/contentful.graphql.types'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import styles from 'styles/pages/work/work.module.scss'

interface PageProps {
  data: GetProjectPageQuery
}

function Work({ data }: PageProps) {
  const projects = data.projectPageCollection?.items[0]?.projectsCollection?.items
  const tags = data.projectPageCollection?.items[0]?.topCategoriesCollection?.items

  const [selectedCategory, setSelectedCategory] = useState<string | null>()

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects

    return projects?.filter(
      (p) => Number(p?.techTagsCollection?.items.findIndex((i) => i?.slug === selectedCategory)) > -1
    )
  }, [projects, selectedCategory])

  return (
    <Page title="Work | YK" showContentfulWarning={!projects || !projects.length}>
      <div className={styles.root}>
        <h2>Here is some of my best projects</h2>

        <div className={styles.topCategories}>
          <div className={styles.title}>Top Categories</div>
          <div className={styles.tags}>
            {tags?.map((t) => (
              <div
                className={clsx(styles.tag, selectedCategory === t?.slug && styles.selected)}
                onClick={() => {
                  setSelectedCategory((c) => (t?.slug === c ? '' : t?.slug))
                }}
              >
                {t?.name}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projectList}>
          {filteredProjects?.map((p) => (
            <Link key={p?.slug} href="/work/[slug]" as={`/work/${p?.slug}`} passHref>
              <a>
                <div className={styles.project} style={{ background: p?.primaryColor || '' }}>
                  <img src={p?.logo?.url || ''} />
                  <div className={styles.title}>{p?.name}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default Work

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getProjectPage()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
