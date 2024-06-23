import { AvatarReview } from "../avatar/avatar-review";

function Review({ avatar, summary }: { avatar: string; summary: string }) {
  return (
    <div className="flex flex-row sm:gap-[1rem] gap-[0.5rem] sm:p-[0.5rem] py-[0.5rem]">
      <AvatarReview
        src={avatar}
        className="sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem]"
      />
      <div className="w-[37.5rem] sm:px-[2rem] sm:py-[1rem]  px-[1rem] py-[1rem]  bg-background-secondary border border-input text-center font-medium sm:text-base text-xs rounded-e-[1rem] rounded-es-[1rem] overflow-hidden">
        {summary}
      </div>
    </div>
  );
}

export default Review;
