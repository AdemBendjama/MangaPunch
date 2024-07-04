import StarIcon from "@/components/icons/star-icon";
import Image from "next/image";
import { ButtonWithIcon } from "../button-variants/button-with-icon";
import HeartIcon from "@/components/icons/heart-icon";
import { formatStartDate, toTitleCase } from "@/lib/utils";
import ReadMangaDex from "./read-mangadex";

function MangaMetaData({
  coverImage,
  popularity,
  averageScore,
  title,
  authors,
  status,
  startDate,
  genres,
  chapters,
  titles,
}: {
  coverImage: string;
  popularity?: number;
  averageScore: number | null;
  title: string;
  authors: string[];
  status: string | null;
  startDate: {
    year: number;
    month: number;
    day: number;
  } | null;
  genres: string[];
  chapters: number | null;
  titles: {
    romaji: string;
    english: string | null;
    native: string | null;
  };
}) {
  return (
    <div className="sm:h-[19rem] lg:mx-auto lg:w-[63rem] lg:px-[0] md:px-[3rem] sm:px-[1rem] px-[1rem] relative">
      {/* cover + actions */}
      <div className="sm:w-auto w-[90vw] flex sm:flex-col sm:items-start sm:justify-normal sm:gap-[0.875rem] flex-row items-end justify-between gap-[0.625rem] absolute lg:top-[-60%] sm:top-[-56%] top-[-50px]">
        <div className="lg:min-w-[230px] lg:min-h-[22.5rem] sm:min-w-[176px] sm:min-h-[18rem] min-w-[115px] min-h-[11.5rem] rounded-[6px] overflow-hidden relative shadow-card-drop dark:shadow-none">
          <Image
            src={coverImage}
            alt="cover image"
            fill={true}
            unoptimized={true}
            sizes="(min-width: 1024px) 230px, (min-width: 640px) 176px, 115px"
            className="object-fill"
          />
        </div>
        <div className="w-full sm:hidden flex flex-col gap-[0.875rem]">
          <div className="flex justify-between gap-[1rem]">
            <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
              <StarIcon className="sm:w-6 sm:h-6 w-5 h-5" />
              <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
                {averageScore ? averageScore / 10 : "N/A"}/10
              </span>
            </div>
            {popularity && (
              <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
                <HeartIcon className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
                  #{popularity}
                </span>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-[0.5rem]">
            <ButtonWithIcon className="w-full" type="plus">
              Add to Library
            </ButtonWithIcon>
            <ReadMangaDex titles={titles} />
          </div>
        </div>
        <div className="w-full flex-col gap-[0.5rem] sm:flex hidden">
          <ButtonWithIcon className="w-full" type="plus">
            Add to Library
          </ButtonWithIcon>
          <ReadMangaDex titles={titles} />
        </div>
      </div>
      {/* content */}
      <div className="lg:ml-[25%] md:ml-[25vw] sm:ml-[29vw] h-full gap-[0.5rem] sm:pt-[0.5rem] pt-[150px] sm:py-[0.5rem] py-[1rem]">
        {/* title */}
        <div className="flex justify-between items-start py-[0.5rem] 2xl:gap-[1rem] gap-[0.5rem]">
          <span className="font-semibold text-lg sm:line-clamp-2">{title}</span>
          <div className="sm:flex gap-[1rem] hidden">
            {averageScore && (
              <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
                <StarIcon className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
                  {averageScore / 10}/10
                </span>
              </div>
            )}
            {popularity && (
              <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
                <HeartIcon className="sm:w-6 sm:h-6 w-5 h-5" />
                <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
                  #{popularity}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* details */}
        <div className="flex flex-col sm:text-base text-sm gap-[0.5rem] py-[0.5rem]">
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
              Author(s):
            </span>
            <span className="line-clamp-1">{authors.join(", ")}</span>
          </div>
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
              Status:
            </span>
            <span>{status ? toTitleCase(status) : "N/A"}</span>
          </div>
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
              Start Date:
            </span>
            <span>{formatStartDate(startDate)}</span>
          </div>
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
              Genres:
            </span>
            <span className="sm:line-clamp-2">{genres.join(", ")}</span>
          </div>
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
              Chapters:
            </span>
            <span>{chapters ? chapters : "Ongoing"}</span>
          </div>
          {averageScore && (
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
                Rating:
              </span>
              <div className="flex sm:gap-[0.5rem] gap-[0.25rem] items-center">
                {Array.from(
                  { length: Math.floor(averageScore / 10) },
                  (_, index) => (
                    <StarIcon
                      key={index}
                      className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]"
                    />
                  )
                )}
                {Array.from(
                  { length: 10 - Math.floor(averageScore / 10) },
                  (_, index) => (
                    <StarIcon
                      key={index}
                      className="sm:w-5 sm:h-5 w-[0.875rem] h-[0.875rem]"
                      fill="none"
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MangaMetaData;
