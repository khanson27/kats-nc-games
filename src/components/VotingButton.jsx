import { useState, useEffect } from "react";
import { patchVotesForComments, patchVotesForReviews } from "../utils/api";

const VotingButton = (p) => {
  const [voteModifier, setVoteModifier] = useState(0);

  const handleClickUp = (e) => {
    setVoteModifier((prev) => prev + 1);
    {
      !p.comment_id
        ? patchVotesForReviews(p.review_id, 1)
        : patchVotesForComments(p.comment_id, 1);
    }
  };

  const handleClickDown = (e) => {
    setVoteModifier((prev) => prev - 1);
    {
      !p.comment_id
        ? patchVotesForReviews(p.review_id, -1)
        : patchVotesForComments(p.comment_id, -1);
    }
  };

  return (
    <>
      <button onClick={handleClickUp}>😸</button>
      <button onClick={handleClickDown}>😿</button>
      <p>Vote Count:{p.votes + voteModifier}</p>
    </>
  );
};

export default VotingButton;
