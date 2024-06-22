import SlideCategory from "@/components/ui/slide-category/slide-category";
import SlideShow from "@/components/ui/slide-show/slide-show";
import {
  GET_SEINEN_MANGA,
  GET_SHOUNEN_MANGA,
  GET_TRENDING_MANGA,
} from "@/lib/queries";

function Home() {
  return (
    <>
      <SlideShow />
      <div className="flex flex-col 2xl:gap-[2rem] lg:gap-[1rem] xl:pt-[3rem] lg:pt-[2rem] sm:pt-[rem] pt-[0.5rem] lg:pb-[10rem] pb-[3rem] ">
        <SlideCategory title="Trending" query={GET_TRENDING_MANGA} />
        <SlideCategory title="Shounen" query={GET_SHOUNEN_MANGA} />
        <SlideCategory title="Seinen" query={GET_SEINEN_MANGA} />
      </div>
    </>
  );
}

export default Home;
