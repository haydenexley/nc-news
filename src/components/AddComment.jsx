import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useState } from "react";
import { postComment } from "./utils";
import { TextField, Button, Typography, FormControl } from "@mui/material";

const AddComment = ({ article_id, comments, setComments }) => {
  const { user: [userData] } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");
  const [error, setError] = useState(null);

  const handleComment = (event) => {
    event.preventDefault();
    const optimisticComment = {
      comment_id: -1,
      votes: 0,
      created_at: "now",
      author: userData.username,
      body: commentInput,
      article_id: article_id,
    };
    setComments([optimisticComment, ...comments]);
    event.target.disabled = true;

    postComment(article_id, commentInput, userData.username)
      .then((comment) => {
        setComments([comment, ...comments]);
        setCommentInput("");
        event.target.disabled = false;
      })
      .catch(() => {
        setError(
          "Woopsie! There was an error commenting! Please try again later..."
        );
        event.target.disabled = false;
      });
  };

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <FormControl fullWidth >
      <TextField
        label="add comment"
        value={commentInput}
        id="add-comment"
        onChange={(event) => setCommentInput(event.target.value)}
        required
      />
      <Button variant='contained' type="submit" onClick={handleComment}>Comment</Button>
    </FormControl>

  );
};

export default AddComment;

