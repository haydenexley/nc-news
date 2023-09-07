import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import ArticlePoster from './components/ArticlePoster'
import Login from './components/Login';
import {Routes, Route} from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from './contexts/User';

function App() {
  const {user} = useContext(UserContext)
  if (user.length === 0) {
    return <>
    <Header />
    <Login/>
    </>
  }
  return (
    <>
      <Header user={user}/>
      <Routes>
      <Route path='/' element={<ArticlesList/>}/>
      <Route path='/articles/:article_id' element={<ArticlePoster />} />
      <Route path='/topics/:urlTopic' element={<ArticlesList/>}/>
      </Routes>
    </>
  );
}

export default App;
