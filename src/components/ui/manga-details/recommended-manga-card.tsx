import ChevronDown from "@/components/icons/chevron-down";
import CardSmall from "../card/card-small";
import { Recommendations } from "@/lib/types";
import CardsRecommended from "./cards-recommended";

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
      <div className="grid 3xl:grid-cols-[repeat(8,_9vw)] xl:grid-cols-[repeat(6,_11vw)] lg:grid-cols-[repeat(5,_12.5vw)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_29vw)] gap-y-[0.625rem] justify-between items-stretch">
        <CardsRecommended recommendations={recommendations} />
      </div>
    </div>
  );
}

export default RecommendedMangaCards;
