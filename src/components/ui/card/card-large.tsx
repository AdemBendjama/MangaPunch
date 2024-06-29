import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardLarge({
  id,
  title,
  coverImage,
}: {
  id: number;
  title: string;
  coverImage: string;
}) {
  return (
    <div className="flex flex-col gap-[0.5rem] lg:w-[176px]">
      <Link href={`/manga/${id}`}>
        <div className="w-full lg:h-[276px] sm:h-[28vw] h-[45.5vw] rounded-[0.375rem] relative overflow-hidden shadow-card-drop dark:shadow-none">
          <Image
            src={coverImage}
            alt="cover image of manga title"
            fill={true}
            sizes="(min-width: 640px) 18vw, 28vw"
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

export default CardLarge;
