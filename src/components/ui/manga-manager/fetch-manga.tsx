"use client";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import RenderManga from "./render-manga";
import MangaLoading from "./manga-loading";
import { LibraryData } from "@/app/user/library/page";

function FetchManga({
  query,
  page,
  perPage,
  cardType,
  toggleLimitReached,
  variables,
  hover,
  data,
}: {
  query: { name: string; body: string };
  page: number;
  perPage: number;
  cardType: "large" | "regular" | "small";
  toggleLimitReached: () => void;
  variables?: { [key: string]: string | number | number[] };
  hover?: boolean;
  data?: LibraryData[];
}) {
  const { mangaData, loading, error } = useGraphQLQuery(query, {
    ...variables,
    page: page,
    perPage: perPage,
  });

  if (loading) {
    return <MangaLoading perPage={perPage} cardType={cardType} />;
  }
  if (error) {
    toggleLimitReached();
    return <div className="w-full flex justify-center">{error.message}</div>;
  }
  const requiresRank = query.name === "GET_HIGHEST_RATED_ALL_TIME_MANGA";

  return (
    <RenderManga
      mangaData={mangaData}
      cardType={cardType}
      toggleLimitReached={toggleLimitReached}
      requiresRank={requiresRank}
      hover={hover}
      data={data}
    />
  );
}

export default FetchManga;
