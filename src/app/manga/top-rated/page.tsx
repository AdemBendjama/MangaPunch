import CardRegular from "@/components/ui/card/card-regular";

function MangaTopRatedPage() {
  return (
    <div className="xl:px-[11rem] lg:px-[9rem] sm:px-[2rem] px-[1rem] pb-[10rem]">
      <div className="flex justify-center sm:text-[1.75rem] xs:text-2xl text-xl font-bold sm:py-[2.5rem] py-[2rem]">
        Most Popular Manga of All Time
      </div>
      <div className="grid 3xl:grid-cols-[repeat(7,_9vw)] lg:grid-cols-[repeat(5,_13vw)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_29vw)] gap-y-[0.625rem] justify-between items-stretch">
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
        <CardRegular />
      </div>
    </div>
  );
}

export default MangaTopRatedPage;
