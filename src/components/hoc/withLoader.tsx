"use client";

import { Router } from "next/router";
import { FC, useState } from "react";
import AppLoader from "../loaders/AppLoader";

// eslint-disable-next-line react/display-name
const withLoader = (Component: FC<any>) => (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setIsLoading(true));
  Router.events.on("routeChangeComplete", () => setIsLoading(false));
  Router.events.on("routeChangeError", () => setIsLoading(false));

  return isLoading ? <AppLoader /> : <Component {...props} />;
};

export default withLoader;
