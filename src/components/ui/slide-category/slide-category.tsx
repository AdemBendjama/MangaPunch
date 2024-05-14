"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCategoryHeader from "./slide-category-header";
import SlideArrow from "../slide-show/slide-arrow";
import Slide from "./slide";
import "./slide-category.css";

function SlideCategory({
  title,
  slides,
}: {
  title: string;
  slides: {
    coverImage: string;
    title: string;
  }[];
}) {
  var settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SlideArrow type="next" slide="slideCategory" />,
    prevArrow: <SlideArrow type="prev" slide="slideCategory" />,
  };

  return (
    <div className="w-screen flex flex-col py-[1rem] px-[7%] items-center gap-[1rem] slider-container">
      <SlideCategoryHeader title={title} />
      <Slider {...settings} className="w-full">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            coverImage={slide.coverImage}
            title={slide.title}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SlideCategory;
