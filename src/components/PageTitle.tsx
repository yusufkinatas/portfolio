import Head from "next/head";

export function PageTitle(props: { title?: string }) {
  const title = props.title?.trim();
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="twitter:title" content={title} key="twitter:title" />
    </Head>
  );
}
