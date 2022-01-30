import DeleteButton from "./DeleteButton";
import VotingButton from "./VotingButton";

const CommentList = (props) => {
  const { review, comments, username, setComments, setReview } = props;
  return (
    <>
      <p class="title">All Comments: {review.comment_count}</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li class="commentCards" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>by {comment.author}</p>
              <VotingButton
                votes={comment.votes}
                id={comment.comment_id}
                category="comments"
              />
              <DeleteButton
                comment_id={comment.comment_id}
                author={comment.author}
                username={username}
                setComments={setComments}
                setReview={setReview}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
