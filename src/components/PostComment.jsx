import { postCommentForReview } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostComment = () => {
  const [newComment, setNewComment] = useState({});
  const { review_id } = useParams();

  const handleSubmit = (e) => {
    const commentInput = e.target.value;
    const username = "jessjelly";
  };

  useEffect(() => {
    postCommentForReview();
  });
  return (
    <>
      <form onSubmit={handleSubmit()}>
        <label for="commentInput">Write your comment here:</label>
        <br></br>
        <input type="text"></input>
        <label for="submit"></label>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default PostComment;
