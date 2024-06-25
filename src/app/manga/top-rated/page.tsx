import MangaManager from "@/components/ui/manga-manager/manga-manager";
import { GET_HIGHEST_RATED_ALL_TIME_MANGA } from "@/lib/queries";

function TopRatedPage() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-lg font-bold sm:py-[2.5rem] py-[2rem]">
        Most Popular Manga of All Time
      </div>
      <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[1.25rem] pb-[1.25rem] justify-between items-stretch">
        <MangaManager
          perPage={50}
          query={GET_HIGHEST_RATED_ALL_TIME_MANGA}
          cardType="regular"
          infiniteScroll
        />
      </div>
    </div>
  );
}

export default TopRatedPage;
