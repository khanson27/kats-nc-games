import { useState } from "react";
import { patchVotes } from "../utils/api";
import ErrorPage from "./ErrorPage";

const VotingButton = (props) => {
  const [voteModifier, setVoteModifier] = useState(0);
  const [error, setError] = useState(null);
  const { votes, id, category } = props;

  const handleClick = (e) => {
    const voteAmount = Number(e.target.value);
    setVoteModifier((prev) => prev + Number(e.target.value));
    patchVotes(id, voteAmount, category)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <button className="button" value={1} onClick={handleClick}>
        😸
      </button>
      <button className="button" value={-1} onClick={handleClick}>
        😿
      </button>
      <p>Vote Count:{votes + voteModifier}</p>
    </>
  );
};

export default VotingButton;
