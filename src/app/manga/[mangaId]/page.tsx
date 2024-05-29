import ChevronDown from "@/components/icons/chevron-down";
import HeartIcon from "@/components/icons/heart-icon";
import StarIcon from "@/components/icons/star-icon";
import { ButtonWithIcon } from "@/components/ui/button-variants/button-with-icon";
import CardSmall from "@/components/ui/card/card-small";
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
      <div className="sm:h-[19rem] bg-background-secondary lg:px-[10rem] md:[3rem] sm:px-[1rem] px-[1rem] relative">
        {/* cover + actions */}
        <div className="sm:w-auto w-[90vw] flex sm:flex-col sm:items-start sm:justify-normal sm:gap-[0.875rem] flex-row items-end justify-between gap-[0.625rem] absolute lg:top-[-60%] sm:top-[-40%] top-[-100px]">
          <div className="xl:min-w-[13rem] xl:min-h-[21rem] lg:min-w-[11rem] lg:min-h-[18rem] sm:min-w-[9.5rem] sm:min-h-[15.5rem] min-w-[7.2rem] min-h-[11.5rem] relative">
            <Image
              src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
              alt="cover image"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="w-full sm:hidden flex flex-col gap-[0.875rem]">
            <div className="flex justify-between gap-[1rem]">
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
            <div className="w-full">
              <ButtonWithIcon className="w-full" type="plus">
                Add to Library
              </ButtonWithIcon>
            </div>
          </div>
          <div className="w-full sm:block hidden">
            <ButtonWithIcon className="w-full" type="plus">
              Add to Library
            </ButtonWithIcon>
          </div>
        </div>
        {/* content */}
        <div className="lg:ml-[20vw] md:ml-[22vw] sm:ml-[25vw] h-full gap-[0.5rem] sm:pt-[0.5rem] pt-[100px] sm:py-[0.5rem] py-[1rem]">
          {/* title */}
          <div className="flex justify-between items-start py-[0.5rem] 2xl:gap-[1rem] gap-[0.5rem]">
            <span className="font-semibold text-lg sm:line-clamp-2">
              I Was Reincarnated as the 7th Prince So I Can Take My Time
              Perfecting My Magical Ability
            </span>
            <div className="sm:flex gap-[1rem] hidden">
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
          <div className="flex flex-col sm:text-base text-sm gap-[0.5rem] py-[0.5rem]">
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[100px] font-semibold">Author(s):</span>
              <span className="line-clamp-1">Tatsuki Fujimoto</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[100px] font-semibold">Status:</span>
              <span>Releasing</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[100px] font-semibold">Start Date:</span>
              <span>Dec 3, 2018</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[100px] font-semibold">Genres:</span>
              <span className="sm:line-clamp-2">
                Action, Comedy, Drama, Horror, Supernatural, Mystery, Romance,
                Sci-Fi, Thriller, Fantasy
              </span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[100px] font-semibold">Progress:</span>
              <span>15/160</span>
            </div>
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="min-w-[100px] font-semibold">Rating:</span>
              <div className="flex gap-[0.5rem]">
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]" />
                <StarIcon
                  className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]"
                  fill="none"
                />
                <StarIcon
                  className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]"
                  fill="none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] lg:px-[10rem] sm:px-[3rem] px-[1rem]">
        <div className="flex flex-col gap-[1rem] py-[1rem]">
          <span className="font-bold sm:text-lg test-base">Description:</span>
          <span className="font-medium sm:text-base text-sm">
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
            <span className="font-bold sm:text-xl text-base">
              Recommended Related Manga :
            </span>
            <div className="flex items-center gap-[0.25rem]">
              <span className="font-bold text-muted-foreground sm:text-base text-xs">
                View More
              </span>
              <ChevronDown className="sm:w-[1rem] sm:h-[1rem] w-[0.75rem] h-[0.75rem] stroke-muted-foreground" />
            </div>
          </div>
          <div className="grid 3xl:grid-cols-[repeat(10,_8.5rem)] 2xl:grid-cols-[repeat(8,_8.5rem)] xl:grid-cols-[repeat(6,_8.5rem)] lg:grid-cols-[repeat(5,_8rem)] sm:grid-cols-[repeat(4,_8.5rem)] xs:grid-cols-[repeat(4,_6rem)] grid-cols-[repeat(3,_6rem)] gap-y-[0.625rem] justify-between items-stretch">
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaDetailsPage;
