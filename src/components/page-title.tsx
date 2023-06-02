import Head from "next/head";

export const PageTitle = ({ title }: { title?: string }) => {
  const trimmedTitle = title?.trim();
  return (
    <Head>
      <title>{trimmedTitle}</title>
      <meta name="title" content={trimmedTitle} key="title" />
      <meta property="og:title" content={trimmedTitle} key="og:title" />
      <meta
        property="twitter:title"
        content={trimmedTitle}
        key="twitter:title"
      />
    </Head>
  );
};
