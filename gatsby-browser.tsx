import React from "react";
import { Providers } from "./src/components/providers";

exports.wrapRootElement = ({ element }) => <Providers>{element}</Providers>;
