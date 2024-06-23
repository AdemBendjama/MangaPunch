"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCategoryHeader from "./slide-category-header";
import SlideArrow from "../slide-show/slide-arrow";
import Slide from "./slide";
import "./slide-category.css";
import SlideLoading from "./slide-loading";
import useGraphQLQuery from "@/lib/useGraphQLQuery";

var settings = {
  infinite: false,
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <SlideArrow type="next" slide="slideCategory" />,
  prevArrow: <SlideArrow type="prev" slide="slideCategory" />,
  responsive: [
    {
      breakpoint: 1535,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
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

function SlideCategory({
  title,
  query,
}: {
  title: string;
  query: { name: string; body: string };
}) {
  const { mangaData, loading, error } = useGraphQLQuery(query);

  if (loading) {
    const slides = [];
    for (let i = 0; i < 10; i++) {
      slides.push(<SlideLoading key={i} />);
    }
    return (
      <div className="w-full flex flex-col pt-[1rem] lg:px-[7%] px-[9.9vw] items-start lg:gap-[1rem] sm:[0.75rem] gap-[0.5rem] slider-container">
        <SlideCategoryHeader title={title} />
        <Slider {...settings} className="w-full">
          {slides}
        </Slider>
      </div>
    );
  }

  if (error)
    return <div className="w-full flex justify-center">{error.message}</div>;

  return (
    <div className="w-full flex flex-col pt-[1rem] lg:px-[7%] px-[9.9vw] items-start lg:gap-[1rem] sm:[0.75rem] gap-[0.5rem] slider-container">
      <SlideCategoryHeader title={title} />
      <Slider {...settings} className="w-full">
        {mangaData.length !== 0 &&
          mangaData.map((manga, index) => (
            <Slide
              key={index}
              coverImage={manga.coverImage?.large}
              title={
                manga.title.english ? manga.title.english : manga.title.romaji
              }
            />
          ))}
      </Slider>
    </div>
  );
}

export default SlideCategory;
