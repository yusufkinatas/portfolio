import clsx from "clsx";
import { Page } from "components/page";
import { contentful } from "contentful/api";
import { GetProjectPageQuery } from "contentful/contentful.graphql.types";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "styles/pages/work/work.module.scss";

interface PageProps {
  data: GetProjectPageQuery;
}

const Work = ({ data }: PageProps) => {
  const projects =
    data.projectPageCollection?.items[0]?.projectsCollection?.items;
  const tags =
    data.projectPageCollection?.items[0]?.topCategoriesCollection?.items;

  const [selectedCategory, setSelectedCategory] = useState<string | null>();

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) {
      return projects;
    }

    return projects?.filter(
      (project) =>
        Number(
          project?.techTagsCollection?.items.findIndex(
            (i) => i?.slug === selectedCategory,
          ),
        ) > -1,
    );
  }, [projects, selectedCategory]);

  return (
    <Page
      title="Work | YK"
      showContentfulWarning={!projects || !projects.length}
    >
      <div className={styles.root}>
        <h2>Here are some of my best projects</h2>

        <div className={styles.topCategories}>
          <div className={styles.title}>Top Categories</div>
          <div className={styles.tags}>
            {tags?.map((tag) => (
              <div
                key={tag?.slug}
                className={clsx(
                  styles.tag,
                  selectedCategory === tag?.slug && styles.selected,
                )}
                onClick={() => {
                  setSelectedCategory((category) =>
                    tag?.slug === category ? "" : tag?.slug,
                  );
                }}
              >
                {tag?.name}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projectList}>
          {filteredProjects?.map((project) => (
            <Link
              key={project?.slug}
              href="/work/[slug]"
              as={`/work/${project?.slug}`}
            >
              <div
                className={styles.project}
                style={{ background: project?.primaryColor ?? "" }}
              >
                <img src={project?.logo?.url ?? ""} alt="project logo" />
                <div className={styles.title}>{project?.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Work;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const data = await contentful.getProjectPage();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
