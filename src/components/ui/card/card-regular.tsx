import Image from "next/image";
import Link from "next/link";

function CardRegular({ rank }: { rank?: boolean }) {
  return (
    <div className="flex flex-col gap-[0.5rem] lg:w-[176px] md:w-[16vw] w-[28vw] relative">
      {rank && (
        <div className="flex absolute z-10 top-[-10px] left-[-10px] justify-center items-center text-white sm:text-base text-sm font-bold sm:pt-[0.125rem] sm:w-[2.5rem] sm:h-[2.5rem] w-[2rem] h-[2rem] rounded-[50%] bg-primary">
          #1
        </div>
      )}
      <Link href="/manga/70">
        <div className="lg:h-[276px] md:h-[26vw] h-[45.5vw] rounded-[6px] overflow-hidden relative">
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
            alt="cover image"
            fill={true}
            className="object-cover"
          />
        </div>
      </Link>
      <Link href="/manga/70">
        <span className="font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
          Chainsaw Man
        </span>
      </Link>
    </div>
  );
}

export default CardRegular;
