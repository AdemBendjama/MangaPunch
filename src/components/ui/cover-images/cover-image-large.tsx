import Image from "next/image";

function CoverImage({ coverImage }: { coverImage: string }) {
  return (
    <div className="w-[13.125rem] h-[20.3125rem] rounded-[0.375rem] relative overflow-hidden">
      <Image
        src={coverImage}
        alt="cover image of manga title"
        fill={true}
        className="object-cover"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8+R8AArcB2pIvCSwAAAAASUVORK5CYII="
        placeholder="blur"
      />
    </div>
  );
}

export default CoverImage;
