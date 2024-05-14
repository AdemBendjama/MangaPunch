import Image from "next/image";

function Slide({ coverImage, title }: { coverImage: string; title: string }) {
  return (
    <div className="flex flex-col gap-[0.5rem] lg:w-[15vw] sm:w-[18vw] w-[36vw]">
      <div className="w-full lg:h-[23.5vw] sm:h-[28vw] h-[58vw] rounded-[0.375rem] relative overflow-hidden">
        <Image
          src={coverImage}
          alt="cover image of manga title"
          fill={true}
          className="object-cover"
        />
      </div>
      <span
        className="font-semibold 2xl:text-xl lg:text-lg text-sm 2xl:h-[3.5rem] lg:h-[3.5rem] h-[2.5rem] text-muted-foreground w-full overflow-hidden text-ellipsis"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </span>
    </div>
  );
}

export default Slide;
