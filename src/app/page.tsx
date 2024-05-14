import SlideCategory from "@/components/ui/slide-category/slide-category";
import SlideShow from "@/components/ui/slide-show/slide-show";
const slidesTrending = [
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx100664-uzN5998CDxPJ.jpg",
    title: "Ijiranaide, Nagatoro-san",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx132029-jIm1KsPcIwIl.jpg",
    title: "Dandadan",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30013-ulXvn0lzWvsz.jpg",
    title: "ONE PIECE",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx101517-H3TdM3g5ZUe9.jpg",
    title: "Jujutsu Kaisen",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105398-b673Vt5ZSuz3.jpg",
    title: "Na Honjaman Level Up",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx106929-flAUvHZDUz5v.jpg",
    title: "Eleceed",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx163754-eVp3Nal8rAjZ.png",
    title: "Renai Daikou",
  },
];
export default function Home() {
  return (
    <>
      <SlideShow />
      <div className="flex flex-col gap-[2rem] pt-[4rem] pb-[10rem]">
        <SlideCategory title="Trending" slides={slidesTrending} />
        <SlideCategory title="Shonen" slides={slidesTrending} />
        <SlideCategory title="Seinen" slides={slidesTrending} />
      </div>
    </>
  );
}
