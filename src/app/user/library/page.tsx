import ChevronDown from "@/components/icons/chevron-down";
import HeartIcon from "@/components/icons/heart-icon";
import SortIcon from "@/components/icons/sort-icon";
import StarIcon from "@/components/icons/star-icon";
import { AvatarReview } from "@/components/ui/avatar/avatar-review";
import { ButtonWithIcon } from "@/components/ui/button-variants/button-with-icon";
import CardSmall from "@/components/ui/card/card-small";
import { TextareaWithLabel } from "@/components/ui/text-area/text-area";
import Image from "next/image";

function UserLibraryPage() {
  return (
    <div className="text-foreground">
      <div className="w-screen h-[350px] relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-xpU0zxrlU2Ux.jpg"
          alt="background Image"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] lg:px-[6.875rem] sm:px-[3rem] px-[1rem]">
        <div className="flex flex-col gap-[0.625rem] py-[1rem]">
          <div className="flex justify-between items-center py-[0.4rem]">
            <span className="font-bold sm:text-xl text-base">
              Recommended Related Manga :
            </span>
            <div className="flex items-center gap-[0.25rem]">
              <SortIcon className="sm:min-w-[1rem] sm:min-h-[1rem] w-[0.75rem] h-[0.75rem] stroke-muted-foreground text-muted-foreground" />
              <span className="font-bold text-muted-foreground sm:text-base text-xs">
                Progress
              </span>
            </div>
          </div>
          <div className="grid 3xl:grid-cols-[repeat(9,_9vw)] xl:grid-cols-[repeat(7,_11vw)] lg:grid-cols-[repeat(6,_12.5vw)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_29vw)] gap-y-[0.625rem] justify-between items-stretch">
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLibraryPage;
