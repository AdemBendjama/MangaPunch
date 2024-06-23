import { Reviews as ReviewsInterface } from "@/lib/types";
import Review from "./review";

function Reviews({ reviews }: { reviews: ReviewsInterface }) {
  return (
    <div className="flex flex-col gap-[0.5rem] py-[1rem]">
      <span className="font-bold sm:text-lg text-base">Reviews:</span>
      {reviews.edges.length !== 0 &&
        reviews.edges.map((edge) => {
          const review = edge.node;
          return (
            <Review
              key={review.id}
              summary={review.summary}
              avatar={review.user.avatar.medium}
            />
          );
        })}
    </div>
  );
}

export default Reviews;
