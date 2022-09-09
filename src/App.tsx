import React from 'react';
import {Routes, Route} from 'react-router-dom'
import ArticlePage from './Pages/ArticlePage';
import DetailArticle from './Pages/DetailArticle';
import './Style/Style.css'

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/detail-article/:index" element={< DetailArticle />} />
      </Routes>
    </div>
  );
}

export default App;
