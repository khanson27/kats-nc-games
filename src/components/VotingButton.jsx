import { useState, useEffect } from "react";

const VotingButton = (p) => {
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    setVotes(p.votes);
  }, []);

  const handleClickUp = (e) => {
    setVotes((prev) => prev + 1);
  };

  const handleClickDown = (e) => {
    setVotes((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={handleClickUp}>😸</button>
      <button onClick={handleClickDown}>😿</button>
      <p>{votes}</p>
    </>
  );
};

export default VotingButton;
