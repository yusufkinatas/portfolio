import Head from "next/head";
import url from "url";

function isAbsolute(urlToCheck: string) {
  return (
    urlToCheck.indexOf("http://") === 0 || urlToCheck.indexOf("https://") === 0
  );
}

export const PageMeta = ({
  description,
  image,
}: {
  description?: string | null;
  image?: string | null;
}) => {
  const base = "https://yusufkinatas.com";

  let imageUrl = image;
  if (imageUrl && !isAbsolute(imageUrl)) {
    imageUrl = url.resolve(base, imageUrl);
  }

  return (
    <Head>
      {description && (
        <>
          <meta
            key="description"
            name="description"
            property="description"
            content={description}
          />
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />
          <meta
            key="twitter:description"
            property="twitter:description"
            content={description}
          />
        </>
      )}
      {imageUrl && (
        <>
          <meta key="image" name="image" content={imageUrl} />
          <meta key="og:image" property="og:image" content={imageUrl} />
          <meta
            key="twitter:card"
            property="twitter:card"
            content="summary_large_image"
          />
          <meta
            key="twitter:image"
            property="twitter:image"
            content={imageUrl}
          />
        </>
      )}
    </Head>
  );
};
