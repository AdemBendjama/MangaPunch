import Image from "next/image";

function Slide({ coverImage, title }: { coverImage: string; title: string }) {
  return (
    <div className="flex flex-col gap-[0.5rem] w-[15vw]">
      <div className="w-full h-[23.5vw] rounded-[0.375rem] relative overflow-hidden">
        <Image
          src={coverImage}
          alt="cover image of manga title"
          fill={true}
          className="object-cover"
        />
      </div>
      <span
        className="font-semibold text-lg text-muted-foreground w-full h-[3.5rem] overflow-hidden text-ellipsis"
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
