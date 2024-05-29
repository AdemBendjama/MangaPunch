import Image from "next/image";

function CardSmall() {
  return (
    <div className="flex flex-col gap-[0.5rem] xl:w-[8.5rem] sm:w-[8rem] w-[6rem]">
      <div className="xl:h-[14rem] sm:h-[13rem] h-[9.375rem] rounded-[6px] overflow-hidden relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
          alt="cover image"
          fill={true}
          className="object-cover"
        />
      </div>
      <span className="font-semibold text-xs h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
        Chainsaw Man
      </span>
    </div>
  );
}

export default CardSmall;
