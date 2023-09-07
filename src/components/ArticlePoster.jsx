import {useParams} from "react-router-dom"
import { getArticle } from './utils';
import { useState, useEffect } from 'react';
import CommentList from './CommentsList'
import Votes from "./Votes";

const ArticlePoster = ({setApiError}) => {
  const {article_id} = useParams()
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoading(false);
      })
      .catch((err) => {
        setApiError([err])
        setLoading(false);
      });
  }, []);

  if (loading)  return <p>loading...</p>
  return <>
  <section className="article-poster">
    <ul>
      <li>
    <p>{article.topic}</p>
    <Votes votes={article.votes} article_id={article.article_id}/>
    <h1>{article.title}</h1>
    <h3>by {article.author}</h3>
    <h4>date: {article.created_at}</h4>
    <img src={article.article_img_url} alt={article.title}/>
    <p>{article.body}</p>
    </li>
    </ul>
  </section>
  <CommentList article_id={article_id}/>
  </>
}

export default ArticlePoster
