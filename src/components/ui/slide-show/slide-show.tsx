"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./slide";
import SlideArrow from "./slide-arrow";

const mangaData = {
  data: {
    Page: {
      media: [
        {
          id: 105778,
          title: {
            romaji: "Chainsaw Man",
            english: "Chainsaw Man",
          },
          description:
            "The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!<br>\n<br>\n(Source: MANGA Plus)<br>\n<br>\n<i>Notes:<br>\n- Nominated for the 2020 Manga Taisho Award.<br>\n- Winner of the 2021 Kono Manga ga Sugoi Award.<br>\n- Winner of the 66th Shogakukan Manga Award in the shounen category.<br>\n- Winner of the 2021 and 2022 Harvey Award for Best Manga.<br>\n- Chapters 1-97 were released in Weekly Shounen Jump from Dec 3, 2018 to Dec 13, 2020. The series resumed from Ch. 98 in Shounen Jump+ on July 12, 2022</i>",
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg",
          averageScore: 86,
          rankings: [
            {
              id: 22503,
              rank: 38,
              allTime: true,
            },
            {
              id: 22966,
              rank: 1,
              allTime: true,
            },
            {
              id: 28737,
              rank: 2,
              allTime: false,
            },
            {
              id: 28836,
              rank: 1,
              allTime: false,
            },
          ],
        },
        {
          id: 105398,
          title: {
            romaji: "Na Honjaman Level Up",
            english: "Solo Leveling",
          },
          description:
            "In a world where awakened beings called “Hunters” must battle deadly monsters to protect humanity, Sung Jinwoo, nicknamed “the weakest hunter of all mankind,” finds himself in a constant struggle for survival. One day, after a brutal encounter in an overpowered dungeon wipes out his party and threatens to end his life, a mysterious System chooses him as its sole player: Jinwoo has been granted the rare opportunity to level up his abilities, possibly beyond any known limits. Follow Jinwoo’s journey as he takes on ever-stronger enemies, both human and monster, to discover the secrets deep within the dungeons and the ultimate extent of his powers.\n<br><br>\n(Source: Tappytoon)\n<br><br>\n<i>Note: Chapter count includes a prologue and 21 side stories.</i>",
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105398-b673Vt5ZSuz3.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/manga/banner/105398-4UrEhdqZukrg.jpg",
          averageScore: 85,
          rankings: [
            {
              id: 22517,
              rank: 52,
              allTime: true,
            },
            {
              id: 22967,
              rank: 2,
              allTime: true,
            },
            {
              id: 28739,
              rank: 4,
              allTime: false,
            },
            {
              id: 28837,
              rank: 2,
              allTime: false,
            },
          ],
        },
        {
          id: 53390,
          title: {
            romaji: "Shingeki no Kyojin",
            english: "Attack on Titan",
          },
          description:
            "In this post-apocalyptic sci-fi story, humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind. Seemingly unintelligent, they have roamed the world for years, killing everyone they see. For the past century, what's left of man has hidden in a giant, three-walled city. People believe their 50-meter-high walls will protect them from the Titans, but the sudden appearance of an immense Titan is about to change everything.\n<br><br>\n(Source: Kodansha USA)\n<br><br>\n<i>Note: Includes 2 extra chapters.</i>",
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx53390-1RsuABC34P9D.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/manga/banner/53390-6Uru5rrjh8zv.jpg",
          averageScore: 84,
          rankings: [
            {
              id: 22555,
              rank: 90,
              allTime: true,
            },
            {
              id: 22968,
              rank: 3,
              allTime: true,
            },
            {
              id: 26937,
              rank: 2,
              allTime: false,
            },
            {
              id: 27036,
              rank: 1,
              allTime: false,
            },
          ],
        },
        {
          id: 101517,
          title: {
            romaji: "Jujutsu Kaisen",
            english: "Jujutsu Kaisen",
          },
          description:
            "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they’ll unleash when they break the seal…\n<br><br>\n(Source: Viz Media)\n<br><br>\n<i>Notes:<br>\n- Ranked 1st in Japan's Bookstore Employees Top Manga of 2018.<br>\n- Nominated for the 25th Annual Tezuka Osamu Cultural Prize in 2021.<br>\n- Nominated for the 65th Shogakukan Manga Award in the Shounen Category in 2019.</i>",
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx101517-H3TdM3g5ZUe9.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg",
          averageScore: 84,
          rankings: [
            {
              id: 22553,
              rank: 88,
              allTime: true,
            },
            {
              id: 22969,
              rank: 4,
              allTime: true,
            },
            {
              id: 28742,
              rank: 7,
              allTime: false,
            },
            {
              id: 28838,
              rank: 3,
              allTime: false,
            },
          ],
        },
        {
          id: 30002,
          title: {
            romaji: "Berserk",
            english: "Berserk",
          },
          description:
            "His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned—and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.<br>\n<br>\n(Source: Dark Horse)<br>\n<br>\n<i>Notes:<br>\n- Volumes 1-5 contain the 16 prequel chapters 0A - 0P.<br>\n- <a href=\"https://anilist.co/manga/95821/\">Chapter 83</a> was omitted from Volume 13 due to the author’s request.<br>\n- Volume 14 includes “<a href=\"https://anilist.co/manga/36408/\">Berserk: The Prototype</a>”.<br>\n- Due to the author's passing, starting from Chapter 365, the manga is illustrated by Studio Gaga (Miura's assistants) and supervised by Kouji Mori (a close friend of Miura's).</i>",
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30002-7EzO7o21jzeF.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30002-3TuoSMl20fUX.jpg",
          averageScore: 93,
          rankings: [
            {
              id: 22466,
              rank: 1,
              allTime: true,
            },
            {
              id: 22970,
              rank: 5,
              allTime: true,
            },
          ],
        },
      ],
    },
  },
};
function SlideShow() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SlideArrow type="next" slide="slideShow" />,
    prevArrow: <SlideArrow type="prev" slide="slideShow" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {mangaData.data.Page.media.map((manga) => (
          <Slide
            key={manga.id}
            backgroundImage={manga.bannerImage}
            coverImage={manga.coverImage.large}
            title={manga.title.english || manga.title.romaji}
            description={manga.description.split("<br>")[0]}
            averageScore={manga.averageScore}
            popularity={manga.rankings[1].rank} // Assuming popularity is the second ranking
          />
        ))}
      </Slider>
    </div>
  );
}

export default SlideShow;
