import {useParams} from "react-router-dom"
import { getArticle } from './utils';
import { useState, useEffect } from 'react';
import CommentList from './CommentsList'
import Votes from "./Votes";
import { Box, Chip, Container, Typography } from "@mui/material";

const ArticlePoster = ({apiError, setApiError}) => {
  const {article_id} = useParams()
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoading(false);
      })
      .catch(({response}) => {
        setApiError(response)
        setLoading(false);
      });
  }, []);

  if (loading)  return <p>loading...</p>
  return <>
  <Container sx={{width: '90vw', mt: 20, bgcolor: '#dedede', display: "flex", flexDirection: 'column', p: 2}}>
    <Typography sx={{py: 4}} variant="h3">{article.title}</Typography>
    <Chip sx={{width: '9em'}}label={article.topic}></Chip>
    <Typography fontWeight={"bold"} variant='caption'>by {article.author}</Typography>
    <Typography variant='caption'>{new Date(article.created_at).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</Typography>
    <Box component="img" sx={{width: '60vw'}} src={article.article_img_url}/>
    
    <Typography variant='body2'>{article.body}</Typography>

    <Votes votes={article.votes} article_id={article.article_id}/>


  </Container>
  <CommentList article_id={article_id}/>
  </>
}

export default ArticlePoster
