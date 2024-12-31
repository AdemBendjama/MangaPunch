export const GET_TRENDING_MANGA = {
  name: "GET_TRENDING_MANGA",
  body: `
    query GetTrendingManga($perPage: Int!){
      Page(perPage: $perPage) {
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
    query GetShounenManga($perPage: Int!){
      Page(perPage: $perPage) {
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
    query GetSeinenManga($perPage: Int!){
      Page(perPage: $perPage) {
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

export const GET_HIGHEST_RATED_ALL_TIME_MANGA = {
  name: "GET_HIGHEST_RATED_ALL_TIME_MANGA",
  body: `query GetHighestRatedAllTimeManga($page: Int!, $perPage: Int!){
    Page(page: $page, perPage: $perPage) {
      media(sort: SCORE_DESC, type: MANGA, format: MANGA) {
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

export const GET_MANGA = {
  name: "GET_MANGA",
  body: `query GetManga($id: Int!) {
    Page(perPage: 1) {
      media(id: $id) {
        id
        title {
          romaji
          english
        }
        coverImage {
          extraLarge
          large
        }
        bannerImage
        description
        rankings {
          rank
          context
        }
        averageScore
        staff {
          edges {
            node {
              name {
                full
              }
            }
            role
          }
        }
        status
        startDate {
          year
          month
          day
        }
        genres
        chapters
        recommendations(sort: RATING_DESC, perPage: 6) {
          edges {
            node {
              id
              mediaRecommendation {
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
        }
        reviews(sort:RATING_DESC,perPage:3) {
          edges {
            node{
              id
              summary
              user {
                id
                avatar {
                  large
                  medium
                }
              }
            }
          }
        }
          
      }
    }
  }`,
};

export const GET_MANGA_IDS = {
  name: "GET_MANGA_IDS",
  body: `query GetMangaIds($ids: [Int]!, $page: Int!, $perPage: Int!){
    Page(page: $page, perPage: $perPage) {
      media(id_in: $ids) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
      }
    }
  }
  `,
};

export const GET_MANGA_RECOMMENDATIONS = {
  name: "GET_MANGA_RECOMMENDATIONS",
  body: `query GetMangaRecommendations($id: Int!, $page: Int!, $perPage: Int!) {
    Page(perPage: 1) {
      media(id: $id) {
        recommendations(sort: RATING_DESC, page: $page, perPage: $perPage ) {
          edges {
            node {
              id
              mediaRecommendation {
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
        }
          
      }
    }
  }`,
};

export const GET_MANGA_SEARCH = {
  name: "GET_MANGA_SEARCH",
  body: `query GetMangaSearch($sort: [MediaSort]=POPULARITY_DESC, $search: String, $genre: String, $format: MediaFormat,
   $year_lesser: FuzzyDateInt, $year_greater: FuzzyDateInt, $status: MediaStatus, $country: CountryCode, $tag: String,
   $page: Int!, $perPage: Int! ) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort, search: $search, type: MANGA, isAdult: false, 
      genre: $genre, format: $format,
      startDate_lesser: $year_lesser, startDate_greater: $year_greater,
      status: $status, countryOfOrigin: $country ,tag: $tag) {
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
  }`,
};
