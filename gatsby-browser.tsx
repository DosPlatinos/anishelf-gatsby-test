import React from "react";
import { Providers } from "./src/components/common/providers";

export const wrapRootElement = ({ element }) => (
  <Providers>{element}</Providers>
);
