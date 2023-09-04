const ArticleCard = ({ article }) => {
  return <section className="article-card">
    <p className="article-card-topic">{article.topic}</p>
    <h3>{article.title}</h3>
    <p className="article-card-author">{article.author}</p>
    <p>{article.votes}🗳</p>
    <p>Comments: {article.comment_count}</p>

  </section>
};

export default ArticleCard
