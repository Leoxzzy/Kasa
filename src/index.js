/* REACT */
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* STYLE */
import './styles/index.scss'

/* COMPONENTS */
import Header from './components/header';
import Footer from './components/footer'

/* PAGES */
import Home from './pages/home'
import About from './pages/about';
import NotFound from './pages/notfound';
import LodgingSheet from './pages/LodgingSheet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        <Route path='/lodging/:id' element={<LodgingSheet />} />
    </Routes>
    
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
