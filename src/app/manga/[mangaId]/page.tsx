import ChevronDown from "@/components/icons/chevron-down";
import HeartIcon from "@/components/icons/heart-icon";
import StarIcon from "@/components/icons/star-icon";
import { ButtonWithIcon } from "@/components/ui/button-variants/button-with-icon";
import Image from "next/image";

function MangaDetailsPage() {
  return (
    <div className="text-foreground">
      <div className="w-screen h-[350px] relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg"
          alt="background Image"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="h-[22.5vw] bg-background-secondary pl-[11.5vw] pr-[14.5vw] relative">
        {/* cover + actions */}
        <div className="flex flex-col items-start gap-[0.5rem] absolute top-[-60%]">
          <div className="min-w-[16.5vw] min-h-[26.5vw] relative">
            <Image
              src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
              alt="cover image"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="w-full">
            <ButtonWithIcon className="w-full">Add to Library</ButtonWithIcon>
          </div>
        </div>
        {/* content */}
        <div className="ml-[20vw] h-full w-[54vw] gap-[0.5rem] py-[0.5rem]">
          {/* title */}
          <div className="flex justify-between items-start py-[0.5rem] gap-[0.5rem]">
            <span className="font-semibold text-lg line-clamp-2">
              I Was Reincarnated as the 7th Prince So I Can Take My Time
              Perfecting My Magical Ability
            </span>
            <div className="flex gap-[1rem]">
              <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
                <StarIcon className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
                  8.3/10
                </span>
              </div>
              <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
                <HeartIcon className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
                  #1
                </span>
              </div>
            </div>
          </div>
          {/* details */}
          <div className="flex flex-col gap-[0.5rem] py-[0.5rem]">
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[7.5vw] font-semibold">Author(s):</span>
              <span className="line-clamp-1">Tatsuki Fujimoto</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[7.5vw] font-semibold">Status:</span>
              <span>Releasing</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[7.5vw] font-semibold">Start Date:</span>
              <span>Dec 3, 2018</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[7.5vw] font-semibold">Genres:</span>
              <span className="line-clamp-2">
                Action, Comedy, Drama, Horror, Supernatural, Mystery, Romance,
                Sci-Fi, Thriller, Fantasy
              </span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[7.5vw] font-semibold">Progress:</span>
              <span>15/160</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[7.5vw] font-semibold">Rating:</span>
              <div className="flex gap-[0.5rem]">
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" fill="none" />
                <StarIcon className="sm:w-5 sm:h-5 w-4 h-4" fill="none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] px-[10rem]">
        <div className="flex flex-col gap-[1rem] py-[1rem]">
          <span className="font-bold text-lg">Description</span>
          <span className="font-medium">
            The name says it all! Denji&apos;s life of poverty is changed
            forever when he merges with his pet chainsaw dog, Pochita! Now
            he&apos;s living in the big city and an official Devil Hunter. But
            he&apos;s got a lot to learn about his new job and chainsaw powers!
            (Source: MANGA Plus)
          </span>
          <span className="font-medium">
            The name says it all! Denji&apos;s life of poverty is changed
            forever when he merges with his pet chainsaw dog, Pochita! Now
            he&apos;s living in the big city and an official Devil Hunter. But
            he&apos;s got a lot to learn about his new job and chainsaw powers!
            <br></br>
            <br></br>
            (Source: MANGA Plus)<br></br>
            <br></br>
            <i>
              Notes:<br></br>- Nominated for the 2020 Manga Taisho Award.
              <br></br>- Winner of the 2021 Kono Manga ga Sugoi Award.
              <br></br>- Winner of the 66th Shogakukan Manga Award in the
              shounen category.<br></br>- Winner of the 2021 and 2022 Harvey
              Award for Best Manga.<br></br>- Chapters 1-97 were released in
              Weekly Shounen Jump from Dec 3, 2018 to Dec 13, 2020. The series
              resumed from Ch. 98 in Shounen Jump+ on July 12, 2022
            </i>
          </span>
        </div>
        <div className="flex flex-col gap-[0.625rem] py-[1rem]">
          <div className="flex justify-between items-center py-[0.5rem]">
            <span className="font-bold text-xl">
              Recommended Related Manga :
            </span>
            <div className="flex items-center gap-[0.25rem]">
              <span className="font-bold text-muted-foreground">View More</span>
              <ChevronDown className="w-[1rem] h-[1rem] stroke-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaDetailsPage;
