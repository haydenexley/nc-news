import { useState, useEffect } from 'react';
import { getArticles } from './utils';
import ArticleCard from './ArticleCard'

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading)  return <p>loading...</p>
  return <section className="articles-list">
    {articles.map((article) =>  <ArticleCard key={`${article.id}-${article.title}`} article={article} />)}
  </section>
  
    
}

export default ArticlesList;
