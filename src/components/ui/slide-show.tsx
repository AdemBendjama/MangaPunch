"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface SampleNextArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: SampleNextArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "red", right: "20px" }}
      onClick={onClick}
    />
  );
}

interface SamplePrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SamplePrevArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        background: "green",
        left: "20px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SlideShow() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots: React.ReactNode) => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px",
    //       bottom: "20px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i: number) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
  };

  function Slide({ src }: { src: string }) {
    return (
      <div className="w-screen h-[350px] relative">
        <Image
          src={src}
          alt="background slide image"
          fill={true}
          objectFit="cover"
        />
      </div>
    );
  }

  return (
    <div className="h-[350px]">
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
