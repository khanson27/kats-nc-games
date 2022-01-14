import { deleteComments } from "../utils/api";
import { useState } from "react";
import LoadingIcon from "./LoadingIcon";

const DeleteButton = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    deleteComments(props.comment_id).then((res) => {
      setIsLoading(true);
      props.setComments((currComment) => {
        const copyComments = currComment.filter((comment) => {
          return comment.comment_id !== props.comment_id;
        });
        return copyComments;
      });
      props.setReview((prev) => {
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
      ) : props.author === props.username ? (
        <button class="button" onClick={handleClick}>
          Delete
        </button>
      ) : (
        <button class="button" disabled>
          Delete
        </button>
      )}
    </>
  );
};

export default DeleteButton;
