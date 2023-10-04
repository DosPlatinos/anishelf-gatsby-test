/**
 * Anilist wants their GraphQL queries as STRINGS
 */

export const GET_FOLLOWERS_OF_USER: string = `
  query GetFollowersOfUser($userId: Int!) {
    Following(userId: $userId) {
      id
      name
    }
  }
`;
