"use client";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import CardRegular from "../card/card-regular";
import { GET_HIGHEST_RATED_ALL_TIME_MANGA } from "@/lib/queries";
import CardRegularLoading from "../card/card-regular-loading";

function MangaCards({
  page,
  perPage,
  toggleLimitReached,
}: {
  page: number;
  perPage: number;
  toggleLimitReached: () => void;
}) {
  const { mangaData, loading, error } = useGraphQLQuery(
    GET_HIGHEST_RATED_ALL_TIME_MANGA,
    {
      page: page,
      perPage: perPage,
    }
  );

  if (loading) {
    return (
      <>
        {Array.from({ length: 15 }).map((_, index) => (
          <CardRegularLoading key={index} />
        ))}
      </>
    );
  }
  if (error) {
    toggleLimitReached();
    return <div className="w-full flex justify-center">{error.message}</div>;
  }

  return (
    <>
      {mangaData.map((manga) => {
        const ranking = manga.rankings.find(
          (ranking) => ranking.context === "highest rated all time"
        );
        if (!ranking) return;
        if (ranking.rank === 500) toggleLimitReached();
        return (
          <CardRegular
            key={manga.id}
            id={manga.id}
            rank={ranking.rank}
            title={
              manga.title.english ? manga.title.english : manga.title.romaji
            }
            coverImage={manga.coverImage.large}
          />
        );
      })}
    </>
  );
}

export default MangaCards;
