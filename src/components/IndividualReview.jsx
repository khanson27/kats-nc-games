import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getIndividualReview } from "../utils/api";
import VotingButton from "./VotingButton";
import { getCommentsForReview } from "../utils/api";
import PostComment from "./PostComment";

const IndividualReview = (props) => {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getIndividualReview(review_id).then((individualReviewFromApi) => {
      setReview(individualReviewFromApi);
    });
  }, [review_id]);

  useEffect(() => {
    getCommentsForReview(review_id).then((commentsForReviewFromApi) => {
      setComments(commentsForReviewFromApi);
    });
  }, [review_id]);

  return (
    <>
      <h3>{review.title}</h3>
      <img
        src={
          !review.review_img_url
            ? "https://image.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"
            : review.review_img_url
        }
        alt={review.title}
      />
      <h4>by {review.owner}</h4>
      <VotingButton votes={review.votes} review_id={review.review_id} />

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
