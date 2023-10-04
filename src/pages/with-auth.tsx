import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { GET_CURRENT_VIEWER } from "../queries/getCurrentViewer.query";
import { GET_FOLLOWERS_OF_USER } from "../queries/getFollowersOfUser.query";

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
  const [currentUserId, setCurrUserId] = useState("");
  const [currFollowerData, setCurrFollowerData] = useState({});
  const [viewerData, setViewerData] = useState({});
  const [message, setMessage] = useState("");

  const fetchViewer = (event: SyntheticEvent): void => {
    event.preventDefault();

    setMessage("Fetching current User data");

    // Define the config we'll need for our Api request
    const url = "https://graphql.anilist.co";
    const options = {
      method: "POST",
      headers: {
        // TODO: read token from cookie
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_CURRENT_VIEWER,
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
      setViewerData(data);
      setMessage("fetched");
    }

    function handleError(error: object) {
      alert("Error, check console");
      console.error(error);
    }
  };

  /**
   * FOLLOWER STUFF
   */
  const updateUserID = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrUserId(event.target.value);
  };

  const fetchFollowerList = (event: SyntheticEvent): void => {
    event.preventDefault();

    setMessage("Fetching followers");

    if (currentUserId === "null") return;

    // Define the config we'll need for our Api request
    const url = "https://graphql.anilist.co";
    const options = {
      method: "POST",
      headers: {
        // TODO: read token from cookie
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_FOLLOWERS_OF_USER,
        variables: { userId: currentUserId },
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
      setCurrFollowerData(data);
      setMessage("fetched");
    }

    function handleError(error: object) {
      alert("Error, check console");
      console.error(error);
    }
  };

  return (
    <main style={pageStyles}>
      <Link to="/">&larr; Back to Home</Link>

      <h1 style={headingStyles}>Anilist GraphQL Query Test</h1>

      <form onSubmit={fetchViewer}>
        <button type="submit">Get Current Viewer</button>
      </form>

      {message && <p>{message}</p>}

      {viewerData && <pre>{JSON.stringify(viewerData, null, 2)}</pre>}

      <hr />

      <form onSubmit={fetchFollowerList}>
        <label htmlFor="fetch-followers">Get follower list</label>
        <input
          id="fetch-followers"
          type="string"
          name="fetchFollowers"
          value={currentUserId}
          onChange={updateUserID}
        />
        <button type="submit">Get Followers of Current Viewer</button>
      </form>

      {message && <p>{message}</p>}

      {currFollowerData && (
        <pre>{JSON.stringify(currFollowerData, null, 2)}</pre>
      )}

      <h2>Implicit Grant</h2>
      <a href="https://anilist.co/api/v2/oauth/authorize?client_id=13852&response_type=token">
        Login with AniList
      </a>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
