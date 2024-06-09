import Image from "next/image";
import SlideContent from "./slide-content";

function Slide({
  id,
  coverImage,
  title,
  description,
  averageScore,
  popularity,
  backgroundImage,
}: {
  id: number;
  coverImage: string;
  title: string;
  description: string;
  averageScore: number;
  popularity: number;
  backgroundImage: string;
}) {
  return (
    <div className="w-full 3xl:h-[30rem] sm:h-[25rem] h-[21.875rem] block relative lg:shadow-slide-inner shadow-slide-inner-sm   text-slide">
      <div className="lg:w-[70%] w-full sm:py-[1rem] py-[0.875rem] sm:px-[4rem] px-[0.875rem]">
        <div className="sm:w-auto w-full sm:py-[1rem] pb-[1rem] flex justify-center sm:gap-[1rem] gap-[0.5rem]">
          <div className="3xl:min-w-[16rem] sm:min-w-[13.125rem] 3xl:h-[25rem] sm:h-[20.5rem] min-w-[7.1875rem] h-[11.25rem] rounded-[0.375rem] relative overflow-hidden">
            <Image
              src={coverImage}
              alt="cover image of manga title"
              fill={true}
              className="object-cover"
              loading="eager"
            />
          </div>
          <SlideContent
            id={id}
            title={title}
            description={description}
            averageScore={averageScore}
            popularity={popularity}
          />
        </div>
        <div className="sm:hidden">
          <span className="text-xs leading-5 overflow-hidden text-ellipsis line-clamp-4">
            {description}
          </span>
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
