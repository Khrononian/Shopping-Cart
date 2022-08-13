import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Products from './Components/Products';
import ProductData from './Components/ProductData';
import Laptops from './Components/Laptops';
import Desktops from './Components/Desktops';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/products' element={<ProductData />} />
      <Route path='/products/laptops' element={<Laptops />} />
      <Route path='/products/desktops' element={<Desktops />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
