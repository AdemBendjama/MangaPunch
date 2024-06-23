import { notFound } from "next/navigation";
import RecommendedItems from "./recommended-items";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { GET_MANGA_RECOMMENDATIONS } from "@/lib/queries";
import CardSmallLoading from "../card/card-small-loading";

function FetchRecommendedItems({
  id,
  page,
  perPage,
}: {
  id: number;
  page: string;
  perPage: number;
}) {
  const { mangaData, loading, error } = useGraphQLQuery(
    GET_MANGA_RECOMMENDATIONS,
    {
      id: id,
      page: page,
      perPage: perPage,
    }
  );

  if (loading) {
    return (
      <>
        {Array.from({ length: 18 }).map((_, index) => (
          <CardSmallLoading key={index} />
        ))}
      </>
    );
  }
  if (error) return <div>{error.message}</div>;
  if (!mangaData) return notFound();

  return (
    <>
      {mangaData.length !== 0 && (
        <RecommendedItems recommendations={mangaData[0].recommendations} />
      )}
    </>
  );
}

export default FetchRecommendedItems;
