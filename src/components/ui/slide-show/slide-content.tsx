import HeartIcon from "@/components/icons/heart-icon";
import StarIcon from "@/components/icons/star-icon";
import { ButtonWithIcon } from "../button-variants/button-with-icon";

function SlideContent({
  title,
  description,
  averageScore,
  popularity,
}: {
  title: string;
  description: string;
  averageScore: number;
  popularity: number;
}) {
  return (
    <div className="lg:w-[37vw] w-full flex flex-col justify-between">
      <div className="flex flex-col gap-[0.875rem]">
        <div className="lg:text-3xl lg:h-auto lg:max-h-[4.5rem] sm:text-2xl sm:h-auto sm:max-h-[4rem] text-xl max-h-[3.5rem] overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </div>
        <div className="sm:block hidden">
          <span className="sm:text-[1rem] overflow-hidden text-ellipsis 3xl:line-clamp-[7] lg:line-clamp-5 line-clamp-4">
            {description}
          </span>
        </div>
        <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
          <StarIcon className="sm:w-6 sm:h-6 w-5 h-5" />
          <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1">
            {averageScore}/10
          </span>
        </div>
        <div className="flex items-center sm:gap-[0.5rem] gap-[0.25rem]">
          <HeartIcon className="sm:w-6 sm:h-6 w-5 h-5" />
          <span className="sm:text-[1.125rem] text-base leading-[1.125rem] pt-1]">
            #{popularity} Most Popular{" "}
            <span className="sm:inline hidden">All time</span>
          </span>
        </div>
      </div>
      <ButtonWithIcon className="sm:w-auto w-full">Read More</ButtonWithIcon>
    </div>
  );
}

export default SlideContent;
