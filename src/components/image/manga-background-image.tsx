import Image from "next/image";

function MangaBackgroundImage({ src }: { src: string | null }) {
  return (
    <div className="w-full h-[350px] relative shadow-slide-inner-bg">
      {src && (
        <Image
          src={src}
          alt="background Image"
          width={1920}
          height={350}
          className="absolute object-cover w-full h-full -z-10"
        />
      )}
    </div>
  );
}

export default MangaBackgroundImage;
