import RecommendedItems from "./recommended-items";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import { GET_MANGA_RECOMMENDATIONS } from "@/lib/queries";
import CardSmallLoading from "../card/card-small-loading";
import MangaLoading from "../manga-manager/manga-loading";

function FetchRecommendedItems({
  id,
  page,
  perPage,
  toggleLimitReached,
}: {
  id: number;
  page: string;
  perPage: number;
  toggleLimitReached: () => void;
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
    return <MangaLoading perPage={18} cardType="small" />;
  }
  if (error) {
    toggleLimitReached();
    return <div>{error.message}</div>;
  }

  if (mangaData[0].recommendations.edges.length === 0) {
    toggleLimitReached();
    return;
  }

  return <RecommendedItems recommendations={mangaData[0].recommendations} />;
}

export default FetchRecommendedItems;
