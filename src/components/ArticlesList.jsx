import { useState, useEffect } from 'react';
import { getArticles } from './utils';
import ArticleCard from './ArticleCard'
import TopicsDropdown from './TopicsDropdown';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import SortingDropdowns from './SortingDropdowns';
import ErrorPage from './ErrorPage';

const ArticlesList = ({apiError, setApiError}) => {
  const [topic, setTopic] = useState('')
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const {urlTopic} = useParams()
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (urlTopic) {
      setTopic(urlTopic)
    }
  }, [urlTopic, searchParams])

  

  useEffect(() => {
    getArticles(topic, searchParams)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch(({response}) => {
        setApiError(response)
        
        setLoading(false);
        return <p>There was an error!</p>
        
      });
  }, [topic, searchParams, urlTopic]);

  if (loading)  return <p>loading...</p>
  return <>
  <TopicsDropdown topic={topic} setTopic={setTopic} searchParams={searchParams} setSearchParams={setSearchParams} />
  <SortingDropdowns searchParams={searchParams} setSearchParams={setSearchParams} />
  <section className="articles-list">
    {articles.map((article) =>  <ArticleCard key={`${article.id}-${article.title}`} article={article} />)}
  </section>
  </>

  
    
}

export default ArticlesList;
