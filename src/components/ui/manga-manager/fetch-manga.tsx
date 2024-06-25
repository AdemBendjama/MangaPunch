"use client";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import CardRegular from "../card/card-regular";
import CardRegularLoading from "../card/card-regular-loading";
import CardLarge from "../card/card-large";
import CardSmall from "../card/card-small";
import CardLargeLoading from "../card/card-large-loading";
import CardSmallLoading from "../card/card-small-loading";

function FetchManga({
  query,
  page,
  perPage,
  cardType,
  toggleLimitReached,
}: {
  query: { name: string; body: string };
  page: number;
  perPage: number;
  cardType: "large" | "regular" | "small";
  toggleLimitReached: () => void;
}) {
  const { mangaData, loading, error } = useGraphQLQuery(query, {
    page: page,
    perPage: perPage,
  });

  if (loading) {
    return (
      <>
        {Array.from({ length: perPage }).map((_, index) => {
          switch (cardType) {
            case "large":
              return <CardLargeLoading key={index} />;
            case "regular":
              return <CardRegularLoading key={index} />;
            case "small":
              return <CardSmallLoading key={index} />;
          }
        })}
      </>
    );
  }
  if (error) {
    toggleLimitReached();
    return <div className="w-full flex justify-center">{error.message}</div>;
  }
  const requiresRank = query.name === "GET_HIGHEST_RATED_ALL_TIME_MANGA";

  return (
    <>
      {mangaData.map((manga) => {
        let rank = null;
        if (requiresRank) {
          const ranking = manga.rankings.find(
            (ranking) => ranking.context === "highest rated all time"
          );
          if (!ranking) return;
          rank = ranking.rank;
          if (rank === 500) toggleLimitReached();
        }
        switch (cardType) {
          case "large":
            return (
              <CardLarge
                key={manga.id}
                id={manga.id}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                coverImage={manga.coverImage.large}
              />
            );
          case "regular":
            return (
              <CardRegular
                key={manga.id}
                id={manga.id}
                rank={rank}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                coverImage={manga.coverImage.large}
              />
            );
          case "small":
            return (
              <CardSmall
                key={manga.id}
                id={manga.id}
                title={
                  manga.title.english ? manga.title.english : manga.title.romaji
                }
                coverImage={manga.coverImage.large}
              />
            );
        }
      })}
    </>
  );
}

export default FetchManga;
