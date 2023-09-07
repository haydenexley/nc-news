import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { deleteComment } from "./utils"

const CommentCard = ({comment}) => {
  const [error, setError] = useState("")
  const [deleted, setDeleted] = useState('')

  const handleClick = (event) => {
    event.target.parentElement.hidden = true
    deleteComment(comment.comment_id).then((status) => {
      if (status === 204){
        event.target.parentElement.remove()
        setDeleted("Your comment was successfully deleted!")
      }
    }).catch((err) => {
      console.log(err)
      event.target.parentElement.hidden = false
      setError("Something went wrong deleting the comment!")
    })
  }
  let deleteButton
  const {user} = useContext(UserContext)
  if (error) {
    return <p>{error}</p>
  }

  if (deleted) {
    return <p>{deleted}</p>
  }

  if ( comment.author === user[0].username){
     deleteButton = <button onClick={handleClick}>❌</button>
   }
  return   <section role="comment-card" className='comment-card'>
      <li>
            <p>{comment.created_at}</p>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.votes} 🗳</p>
            {deleteButton}
        </li>
  </section>

  
}

export default CommentCard
