import { useState, useEffect } from 'react';
import { getArticles } from './utils';
import ArticleCard from './ArticleCard'
import TopicsDropdown from './TopicsDropdown';
import { useParams } from 'react-router-dom';

const ArticlesList = () => {
  const [topic, setTopic] = useState('')
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const {urlTopic} = useParams()
  console.log(urlTopic)

  useEffect(() => {
    if (urlTopic) {
      setTopic(urlTopic)
    }
  }, [urlTopic])

  

  useEffect(() => {
    getArticles(topic)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        return <p>There was an error!</p>
        
      });
  }, [topic]);

  if (loading)  return <p>loading...</p>
  return <>
  <TopicsDropdown setArticles={setArticles} topic={topic} setTopic={setTopic}/>
  <section className="articles-list">
    {articles.map((article) =>  <ArticleCard key={`${article.id}-${article.title}`} article={article} />)}
  </section>
  </>

  
    
}

export default ArticlesList;
