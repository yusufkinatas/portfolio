import { ContentfulContent } from "components/contentful-content";
import { Link } from "components/link";
import { Page } from "components/page";
import { contentful } from "contentful/api";
import { GetProjectBySlugQuery } from "contentful/contentful.graphql.types";
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import NextLink from "next/link";
import { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "styles/pages/work/project-detail.module.scss";

enum LinkType {
  GITHUB = "GITHUB",
  GOOGLE_PLAY = "GOOGLE_PLAY",
  APP_STORE = "APP_STORE",
  WEBSITE = "WEBSITE",
}

interface PageProps {
  data: GetProjectBySlugQuery;
}

const defaultUrlTitles: Record<LinkType, string> = {
  APP_STORE: "Download for iOS",
  GITHUB: "View Code on Github",
  GOOGLE_PLAY: "Download for Android",
  WEBSITE: "Visit Website",
};

const ProjectDetails = ({ data }: PageProps) => {
  const project = data.projectCollection?.items[0];

  const carouselItems = useMemo(() => {
    const items = project?.images?.items.map((img) => (
      <div
        key={img?.url}
        onClick={() => {
          window.open(img?.url ?? "", "blank");
        }}
        className={styles.carouselItemWrapper}
      >
        <img src={img?.url ?? ""} alt="project visual" />
      </div>
    ));

    if (project?.youtubeVideoId) {
      items?.unshift(
        <div key="yt" className={styles.carouselItemWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>,
      );
    }

    return items;
  }, [project]);

  if (!project) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={`${project.name ?? ""} | YK`}>
      <div className={styles.page}>
        <div className={styles.content}>
          <NextLink href="/work" className={styles.backButton}>
            <img src="/icons/chevron-left.svg" alt="go back button" />
          </NextLink>

          <div className={styles.header}>
            <img src={project.logo?.url ?? ""} alt="project logo" />
            <div>
              <div className={styles.title}>{project.name}</div>
              <div className={styles.categories}>
                {project.categories?.join(" | ")}
              </div>
            </div>
          </div>

          <Carousel
            swipeable
            className={styles.carousel}
            showThumbs={false}
            infiniteLoop
            showStatus={false}
          >
            {carouselItems}
          </Carousel>

          <div className={styles.linksWrapper}>
            {project.urls?.items.map((link) => {
              return (
                <Link
                  key={link?.url}
                  className={styles.link}
                  href={link?.url ?? ""}
                >
                  <img
                    src={`/icons/${link?.type}.svg`}
                    style={{ filter: "" }}
                    alt="link type visual"
                  />
                  {link?.title ?? defaultUrlTitles[link?.type as LinkType]}
                </Link>
              );
            })}
          </div>

          <div>
            <div className={styles.title}>About Project</div>
            <div className={styles.description}>
              <ContentfulContent data={project.description?.json} />
            </div>
          </div>

          <div>
            <div className={styles.title}>Technologies</div>
            <div>
              Code technologies and skills I got involved while working on this
              project
            </div>

            <div className={styles.divider} />

            <ul className={styles.techs}>
              {project.techTagsCollection?.items.map((tech) => (
                <li key={tech?.slug}>{tech?.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await contentful.getAllProjectSlugs();

  return {
    paths:
      res.projectCollection?.items.map((project) => ({
        params: { slug: String(project?.slug) },
      })) ?? [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { slug: string }
> = async (ctx) => {
  const data = await contentful.getProjectBySlug({ slug: ctx.params?.slug });

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default ProjectDetails;
