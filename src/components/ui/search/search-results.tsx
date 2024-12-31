"use client";
import MangaManager from "@/components/ui/manga-manager/manga-manager";
import { GET_MANGA_SEARCH, GET_TRENDING_MANGA } from "@/lib/queries";
import RenderManga from "@/components/ui/manga-manager/render-manga";
import MangaLoading from "@/components/ui/manga-manager/manga-loading";
import { useSearchParams } from "next/navigation";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import ChevronRight from "@/components/icons/chevron-right";
import { toFuzzyDateInt } from "@/lib/utils";
import { useFilterContext } from "@/context/filter-context-provider";
import DisableClicks from "@/components/logic/disable-clicks";

const possibleSearchParams = [
  "search",
  "genre",
  "format",
  "year",
  "status",
  "country",
  "sort",
  "tag",
];

function SearchResults() {
  const { isFilterOpen } = useFilterContext();
  const searchParams = useSearchParams();
  const variables: { [key: string]: string | number } = {};
  possibleSearchParams.forEach((param) => {
    const value = searchParams.get(param);
    if (value !== null) {
      if (param === "year") {
        variables["year_lesser"] = toFuzzyDateInt(parseInt(value) + 1);
        variables["year_greater"] = toFuzzyDateInt(parseInt(value));
      } else {
        variables[param] = value;
      }
    }
  });
  const isEmptyVariables = Object.keys(variables).length === 0;

  return (
    <DisableClicks disabled={isFilterOpen}>
      <div className="sm:px-0 px-[1rem]">
        {isEmptyVariables && (
          <div className="flex flex-col justify-center gap-[1rem]">
            <div className="flex justify-between text-foreground">
              <div className="flex justify-end items-center lg:text-2xl sm:text-xl text-base font-bold h-full">
                <span>Trending Now</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-start gap-[0.1rem]">
                  <span className="lg:text-base sm:text-sm text-xs font-bold">
                    View All
                  </span>
                  <div>
                    <ChevronRight className="stroke-foreground lg:w-[1rem] sm:w-[0.875rem] w-[0.75rem] lg:h-[1.35rem] sm:h-[1.25rem] h-[0.875rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-[repeat(5,_176px)] sm:grid-cols-[repeat(5,_18vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
              <MangaManager
                query={GET_TRENDING_MANGA}
                perPage={5}
                cardType="large"
              />
            </div>
          </div>
        )}
        <div className="grid lg:grid-cols-[repeat(5,_176px)] sm:grid-cols-[repeat(5,_18vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
          <MangaManager
            query={GET_MANGA_SEARCH}
            variables={variables}
            shouldntFetch={isEmptyVariables}
            perPage={50}
            cardType="large"
            infiniteScroll
          />
        </div>
      </div>
    </DisableClicks>
  );
}

export default SearchResults;
