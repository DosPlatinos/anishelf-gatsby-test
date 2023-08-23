import axios from "axios";
import { AniMediaData } from "../../utils/types/anilist.types";
import { stringifyBody } from "../../utils/stringify-body";
import { GET_ANIME_BY_ID } from "../../queries/getAnimeById.query";

/**
 *
 * @param {string} id Reads as a number, but since it's coming from a form, it's a string
 * @returns {Promise}
 */
export async function animeById(id: string): Promise<AniMediaData | void> {
  try {
    const body = stringifyBody({
      query: GET_ANIME_BY_ID,
      variables: { id },
    });

    const response = await axios.post(
      `${process.env.GATSBY_ANILIST_GRAPHQL_ENDPOINT}`,
      { body },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
}
