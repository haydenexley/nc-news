import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { deleteComment } from "./utils"
import { Badge, Button, Card, Container, Typography } from "@mui/material"
import { Favorite, Delete } from "@mui/icons-material"

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

  if (deleted) {
    return <p>{deleted}</p>
  }

  if ( comment.author === user[0].username){
     deleteButton = <Button color='error' onClick={handleClick}><Delete/></Button>
   }
   if (error) {
    return <section role="comment-card" className='comment-card'>
    <li>
          <p>{error}</p>
          <p>{comment.created_at}</p>
          <p>{comment.author}</p>
          <p>{comment.body}</p>
          <p>{comment.votes} 🗳</p>
          {deleteButton}
      </li>
      </section>
  }
  return   <Container>
      <Card sx={{m: 2, bgcolor: '#bbdefb', p: 3}}>
            {deleteButton}
            <Typography variant='caption'>{comment.created_at}</Typography>
            <Typography variant='caption'>{comment.author}</Typography>
            <Typography variant='body1'>{comment.body}</Typography>
            <Badge badgeContent={comment.votes} color="primary" showZero>
        <Favorite color="action" />
      </Badge>
  </Card>

  </Container>


  
}

export default CommentCard
