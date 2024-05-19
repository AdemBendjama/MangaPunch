import HeartIcon from "@/components/icons/heart-icon";
import StarIcon from "@/components/icons/star-icon";
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
      <div className="h-[22.5vw] pl-[11.5vw] pr-[14.5vw] relative">
        <div className="bg-orange-700 w-[230px] h-[360px] absolute top-[-60%]"></div>
        <div className="ml-[20vw] h-full w-[54vw] gap-[0.5rem]">
          {/* title */}
          <div className="flex justify-between items-start py-[0.5rem] gap-[0.5rem]">
            <span className="font-semibold text-lg text-foreground">
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
            <div className="flex gap-[1rem]">
              <span className="min-w-[7.5vw] font-semibold">Author(s):</span>
              <span>Tatsuki Fujimoto</span>
            </div>
            <div className="flex gap-[1rem]">
              <span className="min-w-[7.5vw] font-semibold">Status:</span>
              <span>Releasing</span>
            </div>
            <div className="flex gap-[1rem]">
              <span className="min-w-[7.5vw] font-semibold">Start Date:</span>
              <span>Dec 3, 2018</span>
            </div>
            <div className="flex gap-[1rem]">
              <span className="min-w-[7.5vw] font-semibold">Genres:</span>
              <span className="line-clamp-2">
                Action, Comedy, Drama, Horror, Supernatural, Mystery, Romance,
                Sci-Fi, Thriller, Fantasy
              </span>
            </div>
            <div className="flex gap-[1rem]">
              <span className="min-w-[7.5vw] font-semibold">Progress:</span>
              <span>15/160</span>
            </div>
            <div className="flex gap-[1rem]">
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
    </>
  );
}

export default MangaDetailsPage;
