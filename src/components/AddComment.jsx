import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useState } from "react";
import { postComment } from "./utils";

const AddComment = ({ article_id, comments, setComments }) => {
  const { user: [userData] } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");
  const [error, setError] = useState(null)

  const handleComment = (event) => {
    event.preventDefault();
    const optimisticComment = {
        comment_id: -1, votes: 0, created_at: "now",author: userData.username, body: commentInput,   article_id: article_id
    }
    setComments([optimisticComment, ...comments]);

    postComment(article_id, commentInput, userData.username).catch(() => {
        setError("Woopsie! There was an error commenting! Please try again later...")
    })
    setCommentInput("");
  };
  if (error){
    return <p>{error}</p>
  }

  return <>
      <form onSubmit={handleComment}>
      <label htmlFor="add-comment">Add comment: </label>
      <input value={commentInput} id="add-comment" onChange={(event) => setCommentInput(event.target.value)} required></input>
      <button>Comment</button>
    </form>
  </>
};

export default AddComment;
