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
const slidesShounen = [
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png",
    title: "Chainsaw Man",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx53390-1RsuABC34P9D.jpg",
    title: "Shingeki no Kyojin",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx101517-H3TdM3g5ZUe9.jpg",
    title: "Jujutsu Kaisen",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30013-ulXvn0lzWvsz.jpg",
    title: "ONE PIECE",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87216-c9bSNVD10UuD.png",
    title: "Kimetsu no Yaiba",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx85486-INqnYx8gL3eX.jpg",
    title: "Boku no Hero Academia",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx108556-NHjkz0BNJhLx.jpg",
    title: "SPY×FAMILY",
  },
];
const slidesSeinen = [
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30002-7EzO7o21jzeF.jpg",
    title: "Berserk",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx63327-4KfhQ64AklrK.png",
    title: "Tokyo Ghoul",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx34632-u4d8Pf7p9fl9.png",
    title: "Oyasumi Punpun",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx74347-O6KMkECzHPOE.jpg",
    title: "One Punch-Man",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30656-dNNIEyEIF66b.png",
    title: "Vagabond",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30642-1l7lI2LIt1LV.jpg",
    title: "Vinland Saga",
  },
  {
    coverImage:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx86635-EdaLQmsn86Fy.png",
    title: "Kaguya-sama: Love is War",
  },
];

export default function Home() {
  return (
    <>
      <SlideShow />
      <div className="flex flex-col gap-[2rem] pt-[4rem] pb-[10rem]">
        <SlideCategory title="Trending" slides={slidesTrending} />
        <SlideCategory title="Shonen" slides={slidesShounen} />
        <SlideCategory title="Seinen" slides={slidesSeinen} />
      </div>
    </>
  );
}
