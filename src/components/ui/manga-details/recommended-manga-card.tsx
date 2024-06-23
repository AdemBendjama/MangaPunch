import ChevronDown from "@/components/icons/chevron-down";
import { Recommendations } from "@/lib/types";
import CardsRecommended from "./cards-recommended";
import RecommendedProvider from "./recommended-provider";

function RecommendedMangaCards({
  id,
  recommendations,
}: {
  id: number;
  recommendations: Recommendations;
}) {
  return (
    <div className="flex flex-col gap-[0.625rem] py-[1rem]">
      <div className="flex justify-between items-center py-[0.5rem]">
        <span className="font-bold sm:text-xl text-base">
          Recommended Manga :
        </span>
        <div className="flex items-center sm:gap-[0.25rem] gap-[0.125rem]">
          <span className="font-bold text-muted-foreground sm:text-base text-xs">
            View More
          </span>
          <ChevronDown className="sm:w-[1rem] sm:h-[1rem] w-[0.75rem] h-[0.75rem] stroke-muted-foreground" />
        </div>
      </div>
      <RecommendedProvider>
        <CardsRecommended recommendations={recommendations} />
      </RecommendedProvider>
    </div>
  );
}

export default RecommendedMangaCards;
