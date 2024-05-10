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
        <Slide src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg" />
        <Slide src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105398-4UrEhdqZukrg.jpg" />
        <Slide src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/53390-6Uru5rrjh8zv.jpg" />
        <Slide src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg" />
        <Slide src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/30002-3TuoSMl20fUX.jpg" />
      </Slider>
    </div>
  );
}

export default SlideShow;
