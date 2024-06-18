import SlideCategory from "@/components/ui/slide-category/slide-category";
import SlideShow from "@/components/ui/slide-show/slide-show";
import { slidesTrending, slidesShounen, slidesSeinen } from "./data/home-data";
function Home() {
  return (
    <>
      <SlideShow />
      <div className="flex flex-col 2xl:gap-[2rem] lg:gap-[1rem] xl:pt-[3rem] lg:pt-[2rem] sm:pt-[rem] pt-[0.5rem] lg:pb-[10rem] pb-[3rem] ">
        <SlideCategory title="Trending" slides={slidesTrending} />
        <SlideCategory title="Shonen" slides={slidesShounen} />
        <SlideCategory title="Seinen" slides={slidesSeinen} />
      </div>
    </>
  );
}

export default Home;
