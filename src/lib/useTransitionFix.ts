import Router from "next/router";
import { useEffect } from "react";

const routeChange = () => {
  const allStyleElems = document.querySelectorAll('style[media="x"]');
  allStyleElems.forEach((elem) => {
    elem.removeAttribute("media");
  });
};

// Took this from https://github.com/vercel/next.js/issues/17464#issuecomment-1080337949
export const useTransitionFix = (): void => {
  useEffect(() => {
    Router.events.on("routeChangeComplete", routeChange);
    Router.events.on("routeChangeStart", routeChange);

    return () => {
      Router.events.off("routeChangeComplete", routeChange);
      Router.events.off("routeChangeStart", routeChange);
    };
  }, []);

  useEffect(() => {
    Router.router?.push(Router.router?.pathname, Router.router.asPath);
  }, []);
};
