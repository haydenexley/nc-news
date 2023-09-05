import { useState } from "react";
import { patchVotes } from "./utils";

const Votes = ({ votes, article_id }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);

  const userVote = (inc) => {
    setCurrentVotes(currentVotes + inc)

    patchVotes(article_id, inc).then(({ data: { article: { votes } } }) => {
      setCurrentVotes(votes);
      console.log(votes);
    });
  };

  return (
    <div className="votes">
      <p>Votes: {currentVotes} 🗳</p>
      <button onClick={() => userVote(1)}>+</button>
      <button onClick={() => userVote(-1)}>-</button>
    </div>
  );
};

export default Votes;
