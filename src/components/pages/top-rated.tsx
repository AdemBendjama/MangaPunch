import CardRegular from "../ui/card/card-regular";

function TopRatedManga() {
  return (
    <div className="lg:mx-auto lg:w-[63rem] lg:px-[0rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-lg font-bold sm:py-[2.5rem] py-[2rem]">
        Most Popular Manga of All Time
      </div>
      <div className="grid lg:grid-cols-[repeat(5,_176px)] md:grid-cols-[repeat(5,_16vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
        <CardRegular rank={true} />
      </div>
    </div>
  );
}

export default TopRatedManga;
