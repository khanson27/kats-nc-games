import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getIndividualReview } from "../utils/api";
import VotingButton from "./VotingButton";
import { getCommentsForReview } from "../utils/api";
import PostComment from "./PostComment";

const IndividualReview = () => {
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
      <VotingButton />
      <p>{review.votes}</p>
      <PostComment />
      <p>All Comments: {review.comment_count}</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.review_id}>
              <p>{comment.body}</p>
              <p>by {comment.author}</p>
              <VotingButton votes={comment.votes} />
              <p>Vote count: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
//Nan for voting button - even though votes is a number, gives errors when try to access votes property of obj
export default IndividualReview;
