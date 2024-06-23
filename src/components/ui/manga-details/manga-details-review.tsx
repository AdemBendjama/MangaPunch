import { AvatarReview } from "../avatar/avatar-review";
import { TextareaWithLabel } from "../text-area/text-area";

function MangaDetailsReview() {
  return (
    <>
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
    </>
  );
}

export default MangaDetailsReview;
