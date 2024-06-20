export const GET_TRENDING_MANGA = {
  name: "GET_TRENDING_MANGA",
  body: `
  {
    Page(perPage: 10) {
      media(
        sort: TRENDING_DESC
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
