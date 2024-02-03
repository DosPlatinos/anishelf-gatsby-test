import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { GET_ANIME_BY_ID } from "../queries/getAnimeById.query";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Anilist GraphQL Query Test</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
