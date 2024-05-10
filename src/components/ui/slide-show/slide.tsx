import HeartIcon from "@/components/icons/heart-icon";
import StarIcon from "@/components/icons/star-icon";
import Image from "next/image";
import { ButtonWithIcon } from "../button-variants/button-with-icon";

function Slide({ src }: { src: string }) {
  return (
    <div className="w-screen h-[400px] block relative shadow-slide-inner  text-slide">
      <div className="w-[70%] py-[1rem] px-[4rem]">
        <div className="py-[1rem] flex gap-[1rem]">
          <div className="bg-orange-500 w-[13.125rem] h-[20.3125rem] rounded-[0.375rem]"></div>
          <div className="w-[31.25rem] flex flex-col justify-between">
            <div className="flex flex-col gap-[1rem]">
              <div className="text-[1.875rem]">Chainsaw Man</div>
              <div className="text-[1rem]">
                The name says it all! Denji&apos;s life of poverty is changed
                forever when he merges with his pet chainsaw dog, Pochita! Now
                he&apos;s living in the big city and an official Devil Hunter.
                But he&apos;s got a lot to learn about his new job and chainsaw
                powers!
              </div>
              <div className="flex gap-[0.5rem]">
                <StarIcon />
                <span>8.7/100</span>
              </div>
              <div className="flex gap-[0.5rem]">
                <HeartIcon />
                <span>#1 Most Popular All time</span>
              </div>
            </div>
            <ButtonWithIcon>Read More</ButtonWithIcon>
          </div>
        </div>
      </div>
      <Image
        src={src}
        alt="background slide image"
        fill={true}
        className="object-cover -z-10"
      />
    </div>
  );
}

export default Slide;
