import { useState } from "react";
import { patchVotes } from "./utils";

const Votes = ({ votes, article_id }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [error, setError] = useState(null)

  const userVote = (inc) => {
    setCurrentVotes((localVotes) => localVotes + inc)

    patchVotes(article_id, inc).catch(() => {
      setError("Woopsie! There was an error voting! Please try again later...")
    })
  };
  if (error){
    return <p>{error}</p>
  }

  return (
    <div className="votes">
      <p>Votes: {currentVotes} 🗳</p>
      {error && <p>{error}</p>}
      <button onClick={() => userVote(1)}>+</button>
      <button onClick={() => userVote(-1)}>-</button>
    </div>
  );
};

export default Votes;
