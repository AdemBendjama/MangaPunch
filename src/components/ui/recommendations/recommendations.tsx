"use client";
import { useState } from "react";
import RecommendedItems from "./recommended-items";
import ChevronDown from "@/components/icons/chevron-down";
import { Recommendations as RecommendationsInterface } from "@/lib/types";
import RecommendationsProvider from "@/components/recommendations-provider";

function Recommendations({
  id,
  recommendations,
}: {
  id: number;
  recommendations: RecommendationsInterface;
}) {
  const [isViewMore, setIsViewMore] = useState<boolean>(false);

  const handleViewMore = () => {
    setIsViewMore(!isViewMore);
  };

  return (
    <div className="flex flex-col gap-[0.625rem] py-[1rem]">
      <div className="flex justify-between items-center py-[0.5rem]">
        <span className="font-bold sm:text-xl text-base">
          Recommended Manga :
        </span>
        <div
          className="flex items-center sm:gap-[0.25rem] gap-[0.125rem]"
          onClick={handleViewMore}
        >
          <span className="font-bold text-muted-foreground sm:text-base text-xs cursor-pointer">
            View More
          </span>
          <ChevronDown className="sm:w-[1rem] sm:h-[1rem] w-[0.75rem] h-[0.75rem] stroke-muted-foreground" />
        </div>
      </div>
      <RecommendationsProvider id={id} displayMore={isViewMore}>
        {!isViewMore && <RecommendedItems recommendations={recommendations} />}
      </RecommendationsProvider>
    </div>
  );
}

export default Recommendations;
