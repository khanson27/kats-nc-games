import { useEffect } from "react";
import VotingButton from "./VotingButton";

const CommentList = (props) => {
  return (
    <>
      <p>All Comments: {props.review.comment_count}</p>
      <ul>
        {props.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>by {comment.author}</p>
              <VotingButton
                votes={comment.votes}
                comment_id={comment.comment_id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
