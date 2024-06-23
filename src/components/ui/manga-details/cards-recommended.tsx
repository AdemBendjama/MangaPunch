import { Recommendations } from "@/lib/types";
import CardSmall from "../card/card-small";

function CardsRecommended({
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

export default CardsRecommended;
