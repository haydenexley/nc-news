import {Link} from "react-router-dom"

const ArticleCard = ({ article }) => {

  return <Link to={`/articles/${article.article_id}`} >
  <section className="article-card">
    <p className="article-card-topic">{article.topic}</p>
    <h3>{article.title}</h3>
    <p className="article-card-author">{article.author}</p>
    <p>Votes: {article.votes}🗳</p>
    <p>Comments: {article.comment_count}</p>
  </section>
  </Link>
};

export default ArticleCard
