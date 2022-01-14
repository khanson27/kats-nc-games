import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getIndividualReview } from "../utils/api";
import VotingButton from "./VotingButton";
import { getCommentsForReview } from "../utils/api";
import PostComment from "./PostComment";
import ErrorPage from "./ErrorPage";
import LoadingIcon from "./LoadingIcon";

const IndividualReview = (props) => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { review_id } = useParams();

  useEffect(() => {
    getIndividualReview(review_id)
      .then((individualReviewFromApi) => {
        setIsLoading(true);
        setReview(individualReviewFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [review_id]);

  useEffect(() => {
    getCommentsForReview(review_id)
      .then((commentsForReviewFromApi) => {
        setIsLoading(true);
        setComments(commentsForReviewFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [review_id]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <>
          <h3>{review.title}</h3>
          <img
            class="individualReviewImg"
            src={
              !review.review_img_url
                ? "https://image.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"
                : review.review_img_url
            }
            alt={review.title}
          />
          <h4 class="individualReviewHeader">Designer: {review.designer}</h4>
          <p class="reviewBody">{review.review_body}</p>
          <h4 class="individualReviewHeader">by {review.owner}</h4>{" "}
        </>
      )}
      <VotingButton votes={review.votes} review_id={review.review_id} />
      <br></br>
      <PostComment
        username={props.username}
        setComments={setComments}
        comments={comments}
        review={review}
        setReview={setReview}
      />
    </>
  );
};

export default IndividualReview;
