export const GET_TRENDING_MANGA = {
  name: "GET_TRENDING_MANGA",
  body: `
    {
      Page(perPage: 10) {
        media(
          sort: TRENDING_DESC
          popularity_greater:10000
          type: MANGA
          isAdult: false
          genre_not_in: "Ecchi"
        ) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
        }
      }
    }
  `,
};

export const GET_SHOUNEN_MANGA = {
  name: "GET_SHOUNEN_MANGA",
  body: `
    {
      Page(perPage: 10) {
        media(
          sort: TRENDING_DESC
          popularity_greater:10000
          type: MANGA
          isAdult: false
          genre_not_in: "Ecchi"
          tag: "Shounen"
        ) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
        }
      }
    }
  `,
};

export const GET_SEINEN_MANGA = {
  name: "GET_SEINEN_MANGA",
  body: `
    {
      Page(perPage: 10) {
        media(
          sort: TRENDING_DESC
          popularity_greater:10000
          type: MANGA
          isAdult: false
          genre_not_in: "Ecchi"
          tag: "Seinen"
        ) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
        }
      }
    }
  `,
};

export const GET_MOST_POPULAR_ALL_TIME_MANGA = {
  name: "GET_MOST_POPULAR_ALL_TIME_MANGA",
  body: `query GetMostPopularAllTimeManga($page: Int!){
    Page(page: $page, perPage: 15) {
      media(sort: SCORE_DESC, type: MANGA,format: MANGA) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        rankings {
          rank
          type
          context
        }
      }
    }
  }`,
};
