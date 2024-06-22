import ChevronDown from "@/components/icons/chevron-down";
import CardSmall from "../card/card-small";
import { AvatarReview } from "../avatar/avatar-review";
import { TextareaWithLabel } from "../text-area/text-area";

function MangaSection({ description }: { description: string | null }) {
  return (
    <div className="flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] lg:px-[10rem] sm:px-[3rem] px-[1rem]">
      <div className="flex flex-col gap-[1rem] py-[1rem]">
        <span className="font-bold sm:text-lg test-base">Description:</span>
        <span
          className="font-medium sm:text-base text-sm"
          dangerouslySetInnerHTML={{
            __html: description ? description : "No bio found... :(",
          }}
        />
      </div>
      <div className="flex flex-col gap-[0.625rem] py-[1rem]">
        <div className="flex justify-between items-center py-[0.5rem]">
          <span className="font-bold sm:text-xl text-base">
            Recommended Manga :
          </span>
          <div className="flex items-center sm:gap-[0.25rem] gap-[0.125rem]">
            <span className="font-bold text-muted-foreground sm:text-base text-xs">
              View More
            </span>
            <ChevronDown className="sm:w-[1rem] sm:h-[1rem] w-[0.75rem] h-[0.75rem] stroke-muted-foreground" />
          </div>
        </div>
        <div className="grid 3xl:grid-cols-[repeat(8,_9vw)] xl:grid-cols-[repeat(6,_11vw)] lg:grid-cols-[repeat(5,_12.5vw)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_29vw)] gap-y-[0.625rem] justify-between items-stretch">
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
      <div>
        <TextareaWithLabel
          id="review"
          label="Write a Review:"
          placeholder="Type your review here..."
        />
      </div>
      <div className="flex flex-col gap-[0.5rem] py-[1rem]">
        <span className="font-bold sm:text-lg text-base">Reviews:</span>
        <div className="flex flex-row sm:gap-[1rem] gap-[0.5rem] sm:p-[0.5rem] py-[0.5rem]">
          <AvatarReview
            src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b487857-JvLenJJ7hNHl.jpg"
            className="sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem]"
          />
          <div className="w-[37.5rem] sm:px-[2rem] sm:py-[1rem]  px-[1rem] py-[1rem]  bg-background-secondary border border-input text-center font-medium sm:text-base text-xs rounded-e-[1rem] rounded-es-[1rem] overflow-hidden">
            This is some crazy shit, but it&apos;s a fun (and depressing) ride!
          </div>
        </div>
        <div className="flex flex-row sm:gap-[1rem] gap-[0.5rem] sm:p-[0.5rem] py-[0.5rem]">
          <AvatarReview
            src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b835398-4Y5biaxGeKkl.png"
            className="sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem]"
          />
          <div className="w-[37.5rem] sm:px-[2rem] sm:py-[1rem] px-[1rem] py-[1rem] bg-background-secondary border border-input text-center font-medium sm:text-base text-xs rounded-e-[1rem] rounded-es-[1rem] overflow-hidden">
            A Messy Comedic Tragic Journey About a Boys Quest to Touch Boobs and
            Growing up in a World that is Quite Unfair
          </div>
        </div>
        <div className="flex flex-row sm:gap-[1rem] gap-[0.5rem] sm:p-[0.5rem] py-[0.5rem]">
          <AvatarReview
            src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b937401-K7bwZNrsIfQ8.png"
            className="sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem]"
          />
          <div className="w-[37.5rem] sm:px-[2rem] sm:py-[1rem]  px-[1rem] py-[1rem]  bg-background-secondary border border-input text-center font-medium sm:text-base text-xs rounded-e-[1rem] rounded-es-[1rem] overflow-hidden">
            a hype ride of gore and dark comedy, that somehow finds its best
            attributes in moments of tenderness and silence
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaSection;
