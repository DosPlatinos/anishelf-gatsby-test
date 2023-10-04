/**
 * Anilist wants their GraphQL queries as STRINGS
 */

export const GET_CURRENT_VIEWER: string = `
  query GetCurrentViewer {
    Viewer {
      id
      name
      bannerImage
      isFollowing
      isFollower
      isBlocked
    }
  }
`;
