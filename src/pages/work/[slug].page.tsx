import { ContentfulContent } from "components/contentful-content";
import { Link } from "components/link/link";
import { Page } from "components/page/page";
import { contentful } from "contentful/api";
import { GetProjectBySlugQuery } from "contentful/contentful.graphql.types";
import { getBlurUrlFromSrc } from "lib/get-blur-url-from-src";
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import Image from "next/image";
import NextLink from "next/link";
import { useMemo, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import styles from "./project-detail.module.scss";

enum LinkType {
  GITHUB = "GITHUB",
  GOOGLE_PLAY = "GOOGLE_PLAY",
  APP_STORE = "APP_STORE",
  WEBSITE = "WEBSITE",
}

interface PageProps {
  data?: GetProjectBySlugQuery;
  blurUrls: string[];
}

const defaultUrlTitles: Record<LinkType, string> = {
  APP_STORE: "Download for iOS",
  GITHUB: "View Code on Github",
  GOOGLE_PLAY: "Download for Android",
  WEBSITE: "Visit Website",
};

const ProjectDetails = ({ data, blurUrls }: PageProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [focusedImage, setFocusedImage] = useState("");

  const project = data?.projectCollection?.items[0];

  const carouselItems = useMemo(() => {
    const items = project?.images?.items.map((img, index) => (
      <div
        key={img?.url}
        onClick={() => {
          setFocusedImage(img?.url ?? "");
          dialogRef.current?.showModal();
        }}
        className={styles.carouselItemWrapper}
      >
        <Image
          src={img?.url ?? ""}
          width={img?.width ?? 250}
          height={img?.height ?? 250}
          alt="project visual"
          placeholder="blur"
          blurDataURL={blurUrls[index]}
        />
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
  }, [project, blurUrls]);

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

      <dialog
        className={styles.dialog}
        ref={dialogRef}
        onClick={() => dialogRef.current?.close()}
        onClose={() => setFocusedImage("")}
      >
        <img src={focusedImage} alt="project visual" />
      </dialog>
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

  const blurUrlPromises = data.projectCollection!.items[0]!.images!.items.map(
    (img) => getBlurUrlFromSrc(img!.url ?? ""),
  );

  const blurUrls = await Promise.all(blurUrlPromises);

  return {
    props: {
      data,
      blurUrls,
    },
    revalidate: 10,
  };
};

export default ProjectDetails;
