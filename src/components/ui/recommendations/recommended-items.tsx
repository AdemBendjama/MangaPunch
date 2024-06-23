import CardSmall from "../card/card-small";
import { Recommendations } from "@/lib/types";

function RecommendedItems({
  recommendations,
}: {
  recommendations: Recommendations;
}) {
  return (
    <>
      {recommendations.edges.map((edge) => {
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

export default RecommendedItems;
