import Image from "next/image";

function MangaDetailsPage() {
  return (
    <>
      <div className="w-screen h-[350px] relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg"
          alt="background Image"
          fill={true}
          className="object-cover"
        ></Image>
      </div>
    </>
  );
}

export default MangaDetailsPage;
