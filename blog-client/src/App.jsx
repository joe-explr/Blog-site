import './App.css';
import HomePage from './pages/home/HomePage'
import ArticlePage from './pages/articles/ArticlePage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route index path="/blog/:id" element={<ArticlePage/>} />
      </Routes>
    </div>
  );
}

export default App;
