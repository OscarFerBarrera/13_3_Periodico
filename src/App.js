import './App.css';
import Home from './Home/Home.js';
import News from './News/News.js';
import NewsSection from './News/News.js';
import Header from './Header/Header.js';
import NotFound from './NotFound/NotFound.js'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/News' element={<News></News>}></Route>
          <Route path='/News/:id' element={<NewsSection></NewsSection>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
