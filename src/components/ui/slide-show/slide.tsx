import Image from "next/image";

function Slide({ src }: { src: string }) {
  return (
    <div className="w-screen h-[350px] relative">
      <Image
        src={src}
        alt="background slide image"
        fill={true}
        objectFit="cover"
      />
    </div>
  );
}

export default Slide;
