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
  const { setReview, username, comments, setComments, review } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setChangedComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentPost = { body: changedComment, username: username };
    setIsLoading(true);
    postCommentForReview(review_id, commentPost)
      .then((res) => {
        setReview((prev) => {
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
          <p>You are logged in as {username} </p>
          <br></br>
          <br></br>
          <textarea
            type="text"
            onChange={handleChange}
            value={changedComment}
            placeholder="Write your comment here"
            cols="30"
            rows="5"
          ></textarea>
          <label htmlFor="submit"></label>
          <input type="submit"></input>
        </form>
      )}
      <CommentList
        comments={comments}
        setComments={setComments}
        review={review}
        username={username}
        setReview={setReview}
      />
    </>
  );
};

export default PostComment;
