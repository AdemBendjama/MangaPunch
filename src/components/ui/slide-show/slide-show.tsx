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
          title="Chainsaw Man"
          description="The name says it all! Denji's life of poverty is changed
          forever when he merges with his pet chainsaw dog, Pochita! Now
          he's living in the big city and an official Devil Hunter.
          But he's got a lot to learn about his new job and chainsaw
          powers!"
          averageScore={8.3}
          popularity={1}
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105398-4UrEhdqZukrg.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105398-b673Vt5ZSuz3.jpg"
          title="Chainsaw Man"
          description="The name says it all! Denji's life of poverty is changed
          forever when he merges with his pet chainsaw dog, Pochita! Now
          he's living in the big city and an official Devil Hunter.
          But he's got a lot to learn about his new job and chainsaw
          powers!"
          averageScore={8.3}
          popularity={1}
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/53390-6Uru5rrjh8zv.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx53390-1RsuABC34P9D.jpg"
          title="Chainsaw Man"
          description="The name says it all! Denji's life of poverty is changed
          forever when he merges with his pet chainsaw dog, Pochita! Now
          he's living in the big city and an official Devil Hunter.
          But he's got a lot to learn about his new job and chainsaw
          powers!"
          averageScore={8.3}
          popularity={1}
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx101517-H3TdM3g5ZUe9.jpg"
          title="Chainsaw Man"
          description="The name says it all! Denji's life of poverty is changed
          forever when he merges with his pet chainsaw dog, Pochita! Now
          he's living in the big city and an official Devil Hunter.
          But he's got a lot to learn about his new job and chainsaw
          powers!"
          averageScore={8.3}
          popularity={1}
        />
        <Slide
          backgroundImage="https://s4.anilist.co/file/anilistcdn/media/manga/banner/30002-3TuoSMl20fUX.jpg"
          coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30002-7EzO7o21jzeF.jpg"
          title="Chainsaw Man"
          description="The name says it all! Denji's life of poverty is changed
          forever when he merges with his pet chainsaw dog, Pochita! Now
          he's living in the big city and an official Devil Hunter.
          But he's got a lot to learn about his new job and chainsaw
          powers!"
          averageScore={8.3}
          popularity={1}
        />
      </Slider>
    </div>
  );
}

export default SlideShow;
