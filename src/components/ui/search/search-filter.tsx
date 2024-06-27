"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./select-slider.css";
import SelectDropDown from "@/components/ui/select-dropdown/select-dropdown";
import Slider from "react-slick";
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

function SearchFilter() {
  return (
    <>
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
    </>
  );
}

export default SearchFilter;
