import CardSmall from "../card/card-small";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { GET_MANGA_RECOMMENDATIONS } from "@/lib/queries";
import { notFound } from "next/navigation";
import CardSmallLoading from "../card/card-small-loading";

function CardsRecommendedMore({ page, id }: { page: string; id: number }) {
  const { mangaData, loading, error } = useGraphQLQuery(
    GET_MANGA_RECOMMENDATIONS,
    {
      id: id,
      page: page,
    }
  );

  if (loading) {
    return (
      <>
        {Array.from({ length: 15 }).map((_, index) => (
          <CardSmallLoading key={index} />
        ))}
      </>
    );
  }
  if (error) return <div>{error.message}</div>;
  if (!mangaData) return notFound();

  return (
    <>
      {mangaData.length === 0 &&
        mangaData[0].recommendations.edges.map((edge) => {
          const manga = edge.node.mediaRecommendation;
          return (
            <CardSmall
              key={manga.id}
              coverImage={manga.coverImage.large}
              id={manga.id}
              title={
                manga.title.english ? manga.title.english : manga.title.romaji
              }
            />
          );
        })}
    </>
  );
}

export default CardsRecommendedMore;
