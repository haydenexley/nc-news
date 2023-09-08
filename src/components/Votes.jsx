import { useState } from "react";
import { patchVotes } from "./utils";
import { Badge, Button, Stack } from "@mui/material";
import { Favorite, ThumbDown, ThumbUp } from "@mui/icons-material";

const Votes = ({ votes, article_id }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [error, setError] = useState(null);
  const [upButtonDisabled, setUpButtonDisabled] = useState(false);
  const [downButtonDisabled, setDownButtonDisabled] = useState(false);

  const userVote = (inc) => {
    setCurrentVotes((localVotes) => localVotes + inc);

    patchVotes(article_id, inc)
      .catch(() => {
        setError("Woopsie! There was an error voting! Please try again later...");
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {error && <p>{error}</p>}
      <Stack spacing={4} direction="row" sx={{ color: 'action.active', p: 3 }}>
      <Badge badgeContent={currentVotes} color="primary" showZero>
        <Favorite color="action" />
      </Badge>
        <Button onClick={() => {
          userVote(1);
          setUpButtonDisabled(true);
        }} disabled={upButtonDisabled}>
          <ThumbUp />
        </Button>
        <Button onClick={() => {
          userVote(-1);
          setDownButtonDisabled(true);
        }} disabled={downButtonDisabled}>
          <ThumbDown />
        </Button>
      </Stack>
    </>
  );
};

export default Votes;

