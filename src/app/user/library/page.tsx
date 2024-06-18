import SortIcon from "@/components/icons/sort-icon";
import ProfileBackgroundImage from "@/components/image/profile-background-image";
import ProfileImage from "@/components/image/profile-image";
import { Button } from "@/components/ui/button";
import CardSmall from "@/components/ui/card/card-small";

function UserLibraryPage() {
  return (
    <div className="text-foreground">
      <div className="h-[18.75rem] relative shadow-slide-inner-bg">
        <ProfileBackgroundImage />
        <ProfileImage />
      </div>
      <div className="dark:bg-background-secondary flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] lg:px-[6.875rem] sm:px-[3rem] px-[1rem]">
        <div className="flex flex-col gap-[0.625rem]">
          <div className="flex xs:flex-row flex-col xs:justify-between xs:items-center xs:gap-0 gap-[1rem] py-[1rem]">
            <div>
              <Button className="xs:w-auto w-1/3 text-sm h-[2.5rem] bg-primary text-primary-foreground leading-none rounded-e-[0]">
                Reading
              </Button>
              <Button className="xs:w-auto w-1/3 text-sm h-[2.5rem] bg-primary text-primary-foreground leading-none rounded-[0]">
                Planning
              </Button>
              <Button className="xs:w-auto w-1/3 text-sm h-[2.5rem] bg-primary text-primary-foreground leading-none rounded-s-[0]">
                Completed
              </Button>
            </div>
            <div className="flex items-center gap-[0.25rem] xs:self-auto self-end">
              <SortIcon className="sm:min-w-[1rem] sm:min-h-[1rem] w-[0.875rem] h-[0.875rem] stroke-muted-foreground text-muted-foreground dark:text-foreground dark:stroke-foreground" />
              <span className="font-bold text-muted-foreground dark:text-foreground sm:text-base text-sm">
                Progress
              </span>
            </div>
          </div>
          <div className="grid 3xl:grid-cols-[repeat(9,_9vw)] xl:grid-cols-[repeat(7,_11vw)] lg:grid-cols-[repeat(6,_12.5vw)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
            <CardSmall hover={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLibraryPage;
