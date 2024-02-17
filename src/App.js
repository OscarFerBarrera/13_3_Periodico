import './App.css';
import React from 'react';
import Home from './Home/Home.js';
import News from './News/News.js';
import NewsSection from './NewsSection/NewsSection.js';
import Header from './Header/Header.js';
import NotFound from './NotFound/NotFound.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      
        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/News' element={<React.Suspense fallback={<p>Cargando...</p>}> <News></News> </React.Suspense>}></Route>
          <Route path='/News/:topic' element={<React.Suspense fallback={<p>Cargando...</p>}> <NewsSection></NewsSection> </React.Suspense>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
