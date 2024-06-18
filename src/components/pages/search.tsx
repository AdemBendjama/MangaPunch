"use client";
import ChevronRight from "@/components/icons/chevron-right";
import SearchIcon from "@/components/icons/search-icon";
import CardLarge from "@/components/ui/card/card-large";
import { Input } from "@/components/ui/input";
import SelectDropDown from "@/components/ui/select-dropdown/select-dropdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./css/select-slider.css";
import {
  genreItems,
  formatItems,
  yearItems,
  publishingStatusItems,
  countryItems,
} from "./data/search-filter-data";

function Search() {
  var settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
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
            <Input
              className="flex justify-start items-center
            sm:w-[29rem] w-full h-[3rem] p-[0.5rem] rounded-none border-0 
            bg-background-secondary dark:bg-background text-black dark:text-foreground"
            />
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
      <div className="flex flex-col justify-center gap-[1rem] sm:px-0 px-[1rem]">
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
          <CardLarge />
          <CardLarge />
          <CardLarge />
          <CardLarge />
          <CardLarge />
        </div>
      </div>
    </div>
  );
}

export default Search;
