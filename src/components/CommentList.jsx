import DeleteButton from "./DeleteButton";
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
              <DeleteButton
                comment_id={comment.comment_id}
                author={comment.author}
                username={props.username}
                setComments={props.setComments}
                setReview={props.setReview}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
