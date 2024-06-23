import { ReviewsResponse } from "@/lib/types";
import { TextareaWithLabel } from "../text-area/text-area";
import Review from "../review/review";

function MangaDetailsReview({ reviews }: { reviews: ReviewsResponse }) {
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
        {reviews.edges.length !== 0 &&
          reviews.edges.map((edge) => {
            const review = edge.node;
            return (
              <Review
                summary={review.summary}
                avatar={review.user.avatar.medium}
              />
            );
          })}
      </div>
    </>
  );
}

export default MangaDetailsReview;
