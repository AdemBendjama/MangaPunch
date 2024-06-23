import Image from "next/image";
import Link from "next/link";

function Slide({
  id,
  coverImage,
  title,
}: {
  id: number;
  coverImage: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-[0.5rem] 2xl:w-[13vw] lg:w-[15vw] sm:w-[18vw] w-[36vw]">
      <Link href={`/manga/${id}`}>
        <div className="w-full 2xl:h-[20.5vw] lg:h-[23.5vw] sm:h-[28vw] h-[58vw] rounded-[0.375rem] relative overflow-hidden">
          <Image
            src={coverImage}
            alt="cover image of manga title"
            fill={true}
            className="object-cover"
          />
        </div>
      </Link>
      <Link href={`/manga/${id}`}>
        <span className="font-semibold 2xl:text-xl lg:text-lg text-sm 2xl:h-[3.5rem] lg:h-[3.5rem] h-[2.5rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </span>
      </Link>
    </div>
  );
}

export default Slide;
