import Head from "next/head";
import { Fragment } from "react";
import url from "url";

function isAbsolute(url: string) {
  return url?.indexOf("http://") === 0 || url?.indexOf("https://") === 0;
}

export function PageMeta(props: {
  description?: string | null;
  image?: string | null;
}) {
  const base = "https://yusufkinatas.com";

  let imageUrl = props.image;
  if (imageUrl && !isAbsolute(imageUrl)) {
    imageUrl = url.resolve(base, imageUrl);
  }

  return (
    <Head>
      {props.description && (
        <Fragment>
          <meta
            key="description"
            name="description"
            property="description"
            content={props.description}
          />
          <meta
            key="og:description"
            property="og:description"
            content={props.description}
          />
          <meta
            key="twitter:description"
            property="twitter:description"
            content={props.description}
          />
        </Fragment>
      )}
      {imageUrl && (
        <Fragment>
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
        </Fragment>
      )}
    </Head>
  );
}
