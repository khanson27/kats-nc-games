import { deleteComments } from "../utils/api";
import { useState } from "react";
import LoadingIcon from "./LoadingIcon";

const DeleteButton = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { comment_id, setReview, setComments, author, username } = props;

  const handleClick = () => {
    setIsLoading(true);
    deleteComments(comment_id).then((res) => {
      setComments((currComment) => {
        const copyComments = currComment.filter((comment) => {
          return comment.comment_id !== props.comment_id;
        });
        return copyComments;
      });
      setReview((prev) => {
        const copiedReview = { ...prev };
        copiedReview.comment_count--;
        return copiedReview;
      });
      setIsLoading(false);
    });
  };
  return (
    <>
      {isLoading ? (
        <LoadingIcon />
      ) : author === username ? (
        <button class="button" onClick={handleClick}>
          Delete
        </button>
      ) : null}
    </>
  );
};

export default DeleteButton;
