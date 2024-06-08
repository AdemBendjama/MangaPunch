import Image from "next/image";

function CardSmall() {
  return (
    <div className="flex flex-col gap-[0.5rem] xl:w-[9.5rem] lg:w-[8rem] md:w-[7.5rem] xs:w-[6rem] w-[6.5rem]">
      <div className="xl:h-[15.5rem] lg:h-[13rem] md:h-[12.5rem] xs:h-[9.375rem] h-[10.5rem] rounded-[6px] overflow-hidden relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
          alt="cover image"
          fill={true}
          className="object-cover"
        />
      </div>
      <span className="font-semibold text-sm min-h-[2.5rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
        Chainsaw Man
      </span>
    </div>
  );
}

export default CardSmall;
