import { deleteComments } from "../utils/api";

const DeleteButton = (props) => {
  const handleClick = () => {
    deleteComments(props.comment_id).then((res) => {
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
    });
  };
  return (
    <>
      {props.author === props.username ? (
        <button onClick={handleClick}>Delete</button>
      ) : (
        <button disabled>Delete</button>
      )}{" "}
    </>
  );
};

export default DeleteButton;
