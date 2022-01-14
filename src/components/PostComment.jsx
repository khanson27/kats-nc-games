import { postCommentForReview } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router";
import CommentList from "./CommentList";
import ErrorPage from "./ErrorPage";
import LoadingIcon from "./LoadingIcon";

const PostComment = (props) => {
  const [changedComment, setChangedComment] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { review_id } = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    setChangedComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = props.username;
    const commentPost = { body: changedComment, username: username };
    postCommentForReview(review_id, commentPost)
      .then((res) => {
        setIsLoading(true);
        props.setReview((prev) => {
          const copiedReview = { ...prev };
          copiedReview.comment_count += 1;
          return copiedReview;
        });
        props.setComments((currComments) => {
          return [res, ...currComments];
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    if (error) {
      return <ErrorPage error={error} />;
    }

    setChangedComment("");
  };

  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <form class="commentForm" onSubmit={handleSubmit}>
          <p>You are logged in as {props.username} </p>
          <br></br>
          <label htmlFor="commentInput">Write your comment here:</label>
          <br></br>
          <input
            type="text"
            onChange={handleChange}
            value={changedComment}
          ></input>
          <label htmlFor="submit"></label>
          <input type="submit"></input>
        </form>
      )}
      <CommentList
        comments={props.comments}
        setComments={props.setComments}
        review={props.review}
        username={props.username}
        setReview={props.setReview}
      />
    </>
  );
};

export default PostComment;
