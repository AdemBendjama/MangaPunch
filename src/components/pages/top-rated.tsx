import MangaCollection from "../ui/top-rated/manga-collection";

function TopRatedManga() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-lg font-bold sm:py-[2.5rem] py-[2rem]">
        Most Popular Manga of All Time
      </div>
      <MangaCollection />
    </div>
  );
}

export default TopRatedManga;
