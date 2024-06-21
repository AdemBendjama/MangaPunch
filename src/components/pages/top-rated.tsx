"use client";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import CardRegular from "../ui/card/card-regular";
import { GET_MOST_POPULAR_ALL_TIME_MANGA } from "@/lib/queries";
import CardRegularLoading from "../ui/card/card-regular-loading";

function TopRatedManga() {
  const { mangaData, loading, error } = useGraphQLQuery(
    GET_MOST_POPULAR_ALL_TIME_MANGA
  );
  if (loading) {
    return (
      <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
        <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-lg font-bold sm:py-[2.5rem] py-[2rem]">
          Most Popular Manga of All Time
        </div>
        <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
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
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-lg font-bold sm:py-[2.5rem] py-[2rem]">
        Most Popular Manga of All Time
      </div>
      <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
        {mangaData.map((manga) => (
          <CardRegular
            key={manga.id}
            id={manga.id}
            rank={
              manga.rankings.filter(
                (ranking) => ranking.context === "most popular all time"
              )[0].rank
            }
            title={
              manga.title.english ? manga.title.english : manga.title.romaji
            }
            coverImage={manga.coverImage.large}
          />
        ))}
      </div>
    </div>
  );
}

export default TopRatedManga;
