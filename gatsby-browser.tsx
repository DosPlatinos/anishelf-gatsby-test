import React from "react";
import { Providers } from "./src/components/providers";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <Providers>{element}</Providers>
);
