"use client";
import StarIcon from "@/components/icons/star-icon";
import Image from "next/image";
import HeartIcon from "@/components/icons/heart-icon";
import { formatStartDate, toTitleCase } from "@/lib/utils";
import ReadMangaDex from "./read-mangadex";
import AddLibraryButton from "@/components/forms/add-library-button";
import { useQuery } from "@tanstack/react-query";
import { FilePenLine, Loader2, Pen, PenIcon } from "lucide-react";
import { fetchLibraryItem } from "@/actions/library_actions";
import ChangeStatusButton from "@/components/forms/change-status-button";
import StarRatings from "@/components/forms/star-ratings";
import { Button } from "../button";
import { EditLibraryModal } from "../card-modal/edit-library";
import { useState } from "react";
import ChapterCount from "./chapter-count";
import { useSession } from "next-auth/react";

function MangaMetaData({
  id,
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
  id: number;
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
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["libraryItem", id],
    queryFn: () => fetchLibraryItem(id),
  });

  if (isLoading || isFetching)
    return (
      <div className="flex py-20 w-full items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (error) return;

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
            {session &&
              (!data ? (
                <AddLibraryButton id={id} />
              ) : (
                <div className="flex gap-2">
                  <ChangeStatusButton data={data} />
                  <Button
                    onClick={handleEditClick}
                    className="flex items-center gap-2"
                  >
                    <span>Edit</span>
                    <FilePenLine size={14} className="mb-0.5" />
                  </Button>
                </div>
              ))}
            <ReadMangaDex titles={titles} />
          </div>
        </div>
        <div className="w-full flex-col gap-[0.5rem] sm:flex hidden">
          {session &&
            (!data ? (
              <AddLibraryButton id={id} />
            ) : (
              <div className="flex gap-2">
                <ChangeStatusButton data={data} />
                <Button
                  onClick={handleEditClick}
                  className="flex items-center gap-2"
                >
                  <span>Edit</span>
                  <FilePenLine size={14} className="mb-0.5" />
                </Button>
              </div>
            ))}
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
            <span>
              {data && data?.chapter + "/"}
              <ChapterCount titles={titles} />
            </span>
          </div>
          {data && (
            <div className="flex gap-[1rem] leading-[1.25rem]">
              <span className="sm:min-w-[100px] min-w-[75px] font-semibold">
                Rating:
              </span>
              <StarRatings data={data} />
            </div>
          )}
        </div>
      </div>
      {data && (
        <EditLibraryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          libraryData={data}
          title={title}
        />
      )}
    </div>
  );
}

export default MangaMetaData;
