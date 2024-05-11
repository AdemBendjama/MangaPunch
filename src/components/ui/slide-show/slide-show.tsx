"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./slide";
import SlideArrow from "./slide-arrow";

function SlideShow() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlideArrow type="next" />,
    prevArrow: <SlideArrow type="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105398-4UrEhdqZukrg.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105398-b673Vt5ZSuz3.jpg"
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/53390-6Uru5rrjh8zv.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx53390-1RsuABC34P9D.jpg"
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx101517-H3TdM3g5ZUe9.jpg"
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/30002-3TuoSMl20fUX.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30002-7EzO7o21jzeF.jpg"
        />
      </Slider>
    </div>
  );
}

export default SlideShow;
