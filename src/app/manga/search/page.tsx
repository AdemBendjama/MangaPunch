"use client";
import ChevronRight from "@/components/icons/chevron-right";
import SearchIcon from "@/components/icons/search-icon";
import SelectDropDown from "@/components/ui/select-dropdown/select-dropdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./select-slider.css";
import MangaManager from "@/components/ui/manga-manager/manga-manager";
import { GET_MANGA_SEARCH, GET_TRENDING_MANGA } from "@/lib/queries";
import { SearchForm } from "@/components/forms/search-form";
import RenderManga from "@/components/ui/manga-manager/render-manga";
import MangaLoading from "@/components/ui/manga-manager/manga-loading";
import { useSearchParams } from "next/navigation";
import useGraphQLQuery from "@/lib/useGraphQLQuery";
import {
  countryItems,
  formatItems,
  genreItems,
  publishingStatusItems,
  yearItems,
} from "@/lib/filter-data";

var settings = {
  infinite: false,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { mangaData, error, loading } = useGraphQLQuery(
    GET_MANGA_SEARCH,
    {
      search: searchQuery?.toString() || "",
    },
    searchQuery === null
  );

  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[1rem] pb-[10rem]">
      <div className="flex flex-col items-center gap-[2rem] py-[2rem] px-[1rem]">
        <div className="flex sm:w-auto w-full rounded-[0.375rem] shadow-input-drop overflow-hidden">
          <div
            className="flex justify-end items-center
          w-[2rem] h-[3rem] pr-[0.2rem] pb-[0.1rem] 
          bg-background-secondary dark:bg-background stroke-black dark:stroke-foreground"
          >
            <SearchIcon className="w-[1rem] h-[1rem] stroke-[3px]" />
          </div>
          <div className="overflow-hidden sm:w-auto w-full">
            <SearchForm />
          </div>
        </div>
      </div>
      <div className="sm:flex w-full pb-[2rem] justify-between hidden">
        <SelectDropDown label="Genre" items={genreItems} />
        <SelectDropDown label="Format" items={formatItems} />
        <SelectDropDown label="Year" items={yearItems} />
        <SelectDropDown
          label="Publishing Status"
          items={publishingStatusItems}
        />
        <SelectDropDown label="Country of Origin" items={countryItems} />
      </div>
      <div className="w-full px-[4.5vw] pb-[2rem] sm:hidden select-slider-container">
        <Slider {...settings} className="w-full">
          <div className="py-[0.5rem]">
            <SelectDropDown label="Genre" items={genreItems} />
          </div>
          <div className="py-[0.5rem]">
            <SelectDropDown label="Format" items={formatItems} />
          </div>
          <div className="py-[0.5rem]">
            <SelectDropDown label="Year" items={yearItems} />
          </div>
          <div className="py-[0.5rem]">
            <SelectDropDown
              label="Publishing Status"
              items={publishingStatusItems}
            />
          </div>
          <div className="py-[0.5rem]">
            <SelectDropDown label="Country of Origin" items={countryItems} />
          </div>
        </Slider>
      </div>
      <div className="sm:px-0 px-[1rem]">
        {!searchQuery && !loading && (
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
        {loading && (
          <div className="grid lg:grid-cols-[repeat(5,_176px)] sm:grid-cols-[repeat(5,_18vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
            <MangaLoading perPage={10} cardType="large" />
          </div>
        )}
        {error && <div>{error.message}</div>}

        {mangaData &&
          searchQuery &&
          !loading &&
          (mangaData.length !== 0 ? (
            <div className="grid lg:grid-cols-[repeat(5,_176px)] sm:grid-cols-[repeat(5,_18vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
              <RenderManga mangaData={mangaData} cardType="large" />
            </div>
          ) : (
            <h1 className="w-full flex justify-center my-[1rem]">
              No Results Found.
            </h1>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
