export const GET_FOLLOWERS_CURR_EPISODES: string = `
  query GetFollowersCurrEpisode {
    Following(userId: $userId) {
      id
      name
    }
    Media(id: 1) {
      title {
        romanji
        english
      }
    }
    AiringSchedule {
      id
      episode
      airingAt
      notYetAired
    }
  }
`;
