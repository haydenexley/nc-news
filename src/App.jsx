import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import ArticlePoster from './components/ArticlePoster'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<ArticlesList/>}/>
      <Route path='/articles/:article_id' element={<ArticlePoster />} />
      </Routes>
    </>
  );
}

export default App;
