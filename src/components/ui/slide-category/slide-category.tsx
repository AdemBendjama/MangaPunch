"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCategoryHeader from "./slide-category-header";
import SlideArrow from "../slide-show/slide-arrow";
import Slide from "./slide";
import "./slide-category.css";

function SlideCategory({ title }: { title: string }) {
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
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx100664-uzN5998CDxPJ.jpg"
          title="Ijiranaide, Nagatoro-san"
        />
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx132029-jIm1KsPcIwIl.jpg"
          title="Dandadan"
        />
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30013-ulXvn0lzWvsz.jpg"
          title="ONE PIECE"
        />
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx101517-H3TdM3g5ZUe9.jpg"
          title="Jujutsu Kaisen"
        />
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105398-b673Vt5ZSuz3.jpg"
          title="Na Honjaman Level Up"
        />
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx106929-flAUvHZDUz5v.jpg"
          title="Eleceed"
        />
        <Slide
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx163754-eVp3Nal8rAjZ.png"
          title="Renai Daikou"
        />
      </Slider>
    </div>
  );
}

export default SlideCategory;
