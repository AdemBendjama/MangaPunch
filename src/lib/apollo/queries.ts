import { gql } from "@apollo/client";

export const GET_TRENDING_MANGA = gql`
  {
    Page(perPage: 10) {
      media(
        sort: TRENDING_DESC
        type: MANGA
        countryOfOrigin: JP
        isAdult: false
        genre_not_in: "Ecchi"
      ) {
        id
        title {
          romaji
          english
        }
        coverImage {
          medium
        }
      }
    }
  }
`;
