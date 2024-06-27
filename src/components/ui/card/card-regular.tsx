import Image from "next/image";
import Link from "next/link";

function CardRegular({
  id,
  rank,
  title,
  coverImage,
}: {
  id: number;
  rank?: number | null;
  title: string;
  coverImage: string;
}) {
  return (
    <div className="flex flex-col gap-[0.5rem] relative">
      {rank && (
        <div className="flex absolute z-10 top-[-10px] left-[-10px] justify-center items-center text-white sm:text-base text-sm font-bold sm:pt-[0.125rem] sm:w-[2.75rem] sm:h-[2.75rem] w-[2.25rem] h-[2.25rem] rounded-[50%] bg-primary">
          #{rank}
        </div>
      )}
      <Link href={`/manga/${id}`}>
        <div className="lg:h-[276px] md:h-[26vw] h-[45.5vw] rounded-[6px] overflow-hidden relative">
          <Image
            src={coverImage}
            alt="cover image"
            fill={true}
            sizes="(min-width: 1024px) 176px, (min-width: 768px) 16vw, 28vw"
            className="object-cover"
          />
        </div>
      </Link>
      <Link href={`/manga/${id}`}>
        <span className="font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </span>
      </Link>
    </div>
  );
}

export default CardRegular;
