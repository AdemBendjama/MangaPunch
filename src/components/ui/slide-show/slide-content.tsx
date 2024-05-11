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
    <div className="w-[31.25rem] flex flex-col justify-between">
      <div className="flex flex-col gap-[1rem]">
        <div className="text-[1.875rem]">{title}</div>
        <div className="text-[1rem]">{description}</div>
        <div className="h-[1.5rem] flex items-center gap-[0.5rem]">
          <StarIcon />
          <span className="text-[1.125rem] leading-[1.125rem] pt-1">
            {averageScore}/10
          </span>
        </div>
        <div className="flex gap-[0.5rem]">
          <HeartIcon />
          <span className="text-[1.125rem] leading-[1.125rem] pt-1">
            #{popularity} Most Popular All time
          </span>
        </div>
      </div>
      <ButtonWithIcon>Read More</ButtonWithIcon>
    </div>
  );
}

export default SlideContent;
