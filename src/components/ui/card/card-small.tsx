import Image from "next/image";

function CardSmall() {
  return (
    <div className="flex flex-col gap-[0.5rem] 3xl:w-[9vw] xl:w-[11vw] lg:w-[12.5vw] md:w-[16vw] xs:w-[20vw] w-[29vw]">
      <div className="3xl:h-[14.5vw] xl:h-[18vw] lg:h-[20vw] md:h-[26vw] xs:h-[31vw] h-[46.5vw] rounded-[6px] overflow-hidden relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
          alt="cover image"
          fill={true}
          className="object-cover"
        />
      </div>
      <span className="font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
        Chainsaw Man
      </span>
    </div>
  );
}

export default CardSmall;
