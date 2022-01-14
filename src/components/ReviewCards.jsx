import VotingButton from "./VotingButton";
import { Link } from "react-router-dom";

const ReviewCards = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map((review) => {
          return (
            <li class="cards" key={review.review_id}>
              <h3>
                <Link
                  to={`/reviews/${review.review_id}`}
                  key={review.review_id}
                >
                  {review.title}
                </Link>
              </h3>
              <img
                class="reviewCardsImg"
                src={
                  !review.review_img_url
                    ? "https://image.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"
                    : review.review_img_url
                }
                alt={review.title}
              />
              <p>By {review.owner}</p>

              <VotingButton votes={review.votes} id={review.review_id} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewCards;
