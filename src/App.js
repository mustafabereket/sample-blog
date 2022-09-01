import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from "react-router-dom"
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import About from './pages/About';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/articles-list" element={<ArticlesList />} ></Route>
          <Route path="/article/:name" element={<Article />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
