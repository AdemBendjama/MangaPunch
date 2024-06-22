import StarIcon from "@/components/icons/star-icon";
import Image from "next/image";
import { ButtonWithIcon } from "../button-variants/button-with-icon";
import HeartIcon from "@/components/icons/heart-icon";
import { toTitleCase } from "@/lib/utils";

function MangaMetaData({
  src,
  popularity,
  averageScore,
  title,
  authors,
  status,
}: {
  src: string;
  popularity?: number;
  averageScore: number | null;
  title: string;
  authors: string[];
  status: string | null;
}) {
  return (
    <div className="sm:h-[19rem] bg-background-secondary lg:px-[10rem] md:[3rem] sm:px-[1rem] px-[1rem] relative">
      {/* cover + actions */}
      <div className="sm:w-auto w-[90vw] flex sm:flex-col sm:items-start sm:justify-normal sm:gap-[0.875rem] flex-row items-end justify-between gap-[0.625rem] absolute lg:top-[-60%] sm:top-[-40%] top-[-100px]">
        <div className="xl:min-w-[14.375rem] xl:min-h-[22.5rem] lg:min-w-[11rem] lg:min-h-[18rem] sm:min-w-[9.5rem] sm:min-h-[15.5rem] min-w-[7.2rem] min-h-[11.5rem] relative">
          <Image
            src={src}
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
      <div className="3xl:ml-[14vw] 2xl:ml-[18vw] lg:ml-[20vw] md:ml-[22vw] sm:ml-[25vw] h-full gap-[0.5rem] sm:pt-[0.5rem] pt-[100px] sm:py-[0.5rem] py-[1rem]">
        {/* title */}
        <div className="flex justify-between items-start py-[0.5rem] 2xl:gap-[1rem] gap-[0.5rem]">
          <span className="font-semibold text-lg sm:line-clamp-2">{title}</span>
          <div className="sm:flex gap-[1rem] hidden">
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
        </div>
        {/* details */}
        <div className="flex flex-col sm:text-base text-sm gap-[0.5rem] py-[0.5rem]">
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="min-w-[100px] font-semibold">Author(s):</span>
            <span className="line-clamp-1">
              {authors.map((author, index) => {
                if (authors.length - 1 === index) {
                  return author;
                } else {
                  return author + ", ";
                }
              })}
            </span>
          </div>
          <div className="flex gap-[1rem] leading-[1.25rem]">
            <span className="min-w-[100px] font-semibold">Status:</span>
            <span>{status ? toTitleCase(status) : "N/A"}</span>
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
  );
}

export default MangaMetaData;
