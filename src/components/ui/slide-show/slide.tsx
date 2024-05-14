import Image from "next/image";
import SlideContent from "./slide-content";

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
  return (
    <div className="w-screen h-[400px] block relative shadow-slide-inner  text-slide">
      <div className="w-[70%] py-[1rem] px-[4rem]">
        <div className="py-[1rem] flex gap-[1rem]">
          <div className="w-[13.125rem] h-[20.3125rem] rounded-[0.375rem] relative overflow-hidden">
            <Image
              src={coverImage}
              alt="cover image of manga title"
              fill={true}
              className="object-cover"
              loading="eager"
            />
          </div>
          <SlideContent
            title={title}
            description={description}
            averageScore={averageScore}
            popularity={popularity}
          />
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
