import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { GET_ANIME_BY_ID } from "../queries/getAnimeById.query";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps> = () => {
  const [animeId, setAnimeId] = useState<string>("");
  const [animeData, setAnimeData] = useState({});

  // Write useLazyQuery
  // Render result

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAnimeId(event.target.value);
  };

  const submitForm = (event: SyntheticEvent): void => {
    event.preventDefault();

    if (animeId === "") return;

    // Define the config we'll need for our Api request
    const url = "https://graphql.anilist.co";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_ANIME_BY_ID,
        variables: { id: animeId },
      }),
    };

    // Make the HTTP Api request
    fetch(url, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);

    function handleResponse(response: Response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleData(data: object) {
      setAnimeData(data);
    }

    function handleError(error: object) {
      alert("Error, check console");
      console.error(error);
    }
  };

  return (
    <main style={pageStyles}>
      <Layout>
        <Link to="/with-auth">Go do auth stuff</Link>

        <h1 style={headingStyles}>Anilist GraphQL Query Test</h1>

        <form onSubmit={submitForm}>
          <label htmlFor="anime-id">Anime ID</label>
          <input
            id="anime-id"
            type="text"
            name="animeId"
            value={animeId}
            onChange={onChange}
          />
          <button type="submit">Find Anime</button>
        </form>

        {animeData && <pre>{JSON.stringify(animeData, null, 2)}</pre>}
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
