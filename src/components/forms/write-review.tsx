import { TextareaWithLabel } from "../ui/text-area/text-area";

function WriteReview() {
  return (
    <div>
      <TextareaWithLabel
        id="review"
        label="Write a Review:"
        placeholder="Type your review here..."
      />
    </div>
  );
}

export default WriteReview;
