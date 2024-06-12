import Image from "next/image";
import React from "react";

function CardLarge() {
  return (
    <div className="flex flex-col gap-[0.5rem] lg:w-[176px] sm:w-[18vw] w-[36vw]">
      <div className="w-full lg:h-[276px] sm:h-[28vw] h-[58vw] rounded-[0.375rem] relative overflow-hidden">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
          alt="cover image of manga title"
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

export default CardLarge;
