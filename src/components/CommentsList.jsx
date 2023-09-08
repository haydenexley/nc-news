import { useState, useEffect } from 'react';
import { getComments } from './utils';
import CommentCard from './CommentCard'
import AddComment from './AddComment';
import { Container, Typography } from '@mui/material';

const CommentsList = ({article_id}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading)  return <p>loading...</p>
  return <>
  <Container>
  <Typography variant='h5'>Comments</Typography>
  <AddComment article_id={article_id} comments={comments} setComments={setComments}/>
  <Container>
  {comments.map((comment) =>  <CommentCard key={`${comment.comment_id}`} comment={comment} setComments={setComments} />)}
  </Container>
  </Container>

  </>
  
    
}

export default CommentsList;