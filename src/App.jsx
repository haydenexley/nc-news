import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import ArticlePoster from './components/ArticlePoster'
import Login from './components/Login';
import {Routes, Route, Navigate} from "react-router-dom"
import { useContext, useState } from 'react';
import { UserContext } from './contexts/User';
import ErrorPage from './components/ErrorPage';

function App() {
  const [apiError, setApiError] = useState(null)
  const {user} = useContext(UserContext)
  if (user.length === 0) {
    return <>
    <Header />
    <Login/>
    </>
  } else if (apiError) {
    return<>
    <Header apiError={apiError} setApiError={setApiError}/>
    <ErrorPage setApiError={setApiError} apiError={apiError}/>
    </>
  }
  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Navigate to="/topics/All"/>} />
        <Route path='/articles/:article_id' element={<ArticlePoster setApiError={setApiError} />} />
        <Route path='/topics/:urlTopic' element={<ArticlesList setApiError={setApiError} />}/>
        <Route path="*" element={<ErrorPage apiError={apiError}/>}/>
      </Routes>
    </>
  );
}

export default App;
