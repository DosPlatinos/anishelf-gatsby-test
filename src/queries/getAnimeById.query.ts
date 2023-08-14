/**
 * Anilist wants their GraphQL queries as STRINGS
 */

export const GET_ANIME_BY_ID: string = `
  query GetAnimeById($id: Int) {
    # Define which variables will be used in the query (id)
    Media(id: $id, type: ANIME) {
      # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;
