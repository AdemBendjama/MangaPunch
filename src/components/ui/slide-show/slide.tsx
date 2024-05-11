import HeartIcon from "@/components/icons/heart-icon";
import StarIcon from "@/components/icons/star-icon";
import Image from "next/image";
import { ButtonWithIcon } from "../button-variants/button-with-icon";
import CoverImage from "../cover-images/cover-image-large";

function Slide({
  coverImage,
  title,
  description,
  averageScore,
  popularity,
  backgroundImage,
}: {
  coverImage: string;
  title: string;
  description: string;
  averageScore: number;
  popularity: number;
  backgroundImage: string;
}) {
  const rating = averageScore / 10;
  return (
    <div className="w-screen h-[400px] block relative shadow-slide-inner  text-slide">
      <div className="w-[70%] py-[1rem] px-[4rem]">
        <div className="py-[1rem] flex gap-[1rem]">
          <CoverImage coverImage={coverImage} />
          <div className="w-[31.25rem] flex flex-col justify-between">
            <div className="flex flex-col gap-[1rem]">
              <div className="text-[1.875rem]">{title}</div>
              <div className="text-[1rem]">{description}</div>
              <div className="h-[1.5rem] flex items-center gap-[0.5rem]">
                <StarIcon />
                <span className="text-[1.125rem] leading-[1.125rem] pt-1">
                  {rating}/10
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
        </div>
      </div>
      <Image
        src={backgroundImage}
        alt="background slide image"
        fill={true}
        className="object-cover -z-10"
      />
    </div>
  );
}

export default Slide;
