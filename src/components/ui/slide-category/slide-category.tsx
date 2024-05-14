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
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen flex flex-col pt-[1rem] lg:px-[7%] px-[9.9vw] items-start lg:gap-[1rem] sm:[0.75rem] gap-[0.5rem]  slider-container">
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
