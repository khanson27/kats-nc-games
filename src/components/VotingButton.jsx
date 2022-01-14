import { useState } from "react";
import { patchVotesForComments, patchVotesForReviews } from "../utils/api";
import ErrorPage from "./ErrorPage";

const VotingButton = (p) => {
  const [voteModifier, setVoteModifier] = useState(0);
  const [error, setError] = useState(null);

  const handleClickUp = (e) => {
    setVoteModifier((prev) => prev + 1);
    {
      !p.comment_id
        ? patchVotesForReviews(p.review_id, 1)
            .then((res) => {
              return res;
            })
            .catch((err) => {
              setError(err);
            })
        : patchVotesForComments(p.comment_id, 1)
            .then((res) => {
              return res;
            })
            .catch((err) => {
              setError(err);
            });
    }
  };

  const handleClickDown = (e) => {
    setVoteModifier((prev) => prev - 1);
    {
      !p.comment_id
        ? patchVotesForReviews(p.review_id, -1)
            .then((res) => {
              return res;
            })
            .catch((err) => {
              setError(err);
            })
        : patchVotesForComments(p.comment_id, -1)
            .then((res) => {
              return res;
            })
            .catch((err) => setError(err));
    }
  };
  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <button class="button" onClick={handleClickUp}>
        😸
      </button>
      <button class="button" onClick={handleClickDown}>
        😿
      </button>
      <p>Vote Count:{p.votes + voteModifier}</p>
    </>
  );
};

export default VotingButton;
