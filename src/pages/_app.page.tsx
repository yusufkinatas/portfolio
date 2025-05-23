import "../styles/app.scss";

import { Analytics } from "@vercel/analytics/react";
import { MainLayout } from "components/main-layout/main-layout";
import { PageMeta } from "components/page-meta";
import { LazyMotion } from "framer-motion";
import { useTransitionFix } from "lib/use-transition-fix";
import { AppProps } from "next/app";
import Head from "next/head";

const loadFramerFeatures = () =>
  import("../lib/framer-features").then((res) => res.default);

const App = ({ Component, pageProps, router }: AppProps) => {
  useTransitionFix();

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=0"
        />
      </Head>
      <PageMeta
        description="Hi! I'm Yusuf, Software Developer. I'm focused on Typescript, web apps, mobile apps, responsive design, AI workflows, and performance."
        image="og_image.jpg"
      />

      <LazyMotion features={loadFramerFeatures} strict>
        {router.route === "/work/[slug]" ? (
          <Component {...pageProps} key={router.route} />
        ) : (
          <MainLayout route={router.route}>
            <Component {...pageProps} key={router.route} />
          </MainLayout>
        )}
      </LazyMotion>

      <Analytics />
    </>
  );
};

export default App;
