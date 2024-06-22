import TopRatedSection from "../ui/top-rated/top-rated-section";

function TopRatedManga() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-lg font-bold sm:py-[2.5rem] py-[2rem]">
        Most Popular Manga of All Time
      </div>
      <TopRatedSection page={"1"} />
      <TopRatedSection page={"2"} />
      <TopRatedSection page={"3"} />
      <TopRatedSection page={"4"} />
      <TopRatedSection page={"5"} />
    </div>
  );
}

export default TopRatedManga;
