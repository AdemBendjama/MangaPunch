"use client";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import CardRegular from "../card/card-regular";
import { GET_MOST_POPULAR_ALL_TIME_MANGA } from "@/lib/queries";
import CardRegularLoading from "../card/card-regular-loading";

function TopRatedSection({ page }: { page: string }) {
  const { mangaData, loading, error } = useGraphQLQuery(
    GET_MOST_POPULAR_ALL_TIME_MANGA,
    {
      page: page,
    }
  );

  if (loading) {
    return (
      <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[1.25rem] pb-[1.25rem] justify-between items-stretch">
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
        <CardRegularLoading />
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[1.25rem] pb-[1.25rem] justify-between items-stretch">
      {mangaData.map((manga) => {
        const ranking = manga.rankings.find(
          (ranking) => ranking.context === "highest rated all time"
        );
        if (!ranking) return;
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
    </div>
  );
}

export default TopRatedSection;
