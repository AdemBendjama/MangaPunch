import Image from "next/image";

function MangaBackgroundImage() {
  return (
    <div className="w-full h-[350px] relative shadow-slide-inner-bg">
      <Image
        src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg"
        alt="background Image"
        width={1920}
        height={350}
        className="absolute object-cover w-full h-full -z-10"
      />
    </div>
  );
}

export default MangaBackgroundImage;
