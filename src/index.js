import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cart from './Components/Cart';
import ProductData from './Components/ProductData';
import Laptops from './Components/Laptops';
import Mouse from './Components/Mouse';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/products' element={<ProductData />} />
      <Route path='/products/laptops' element={<Laptops />} />
      <Route path='/products/mouse' element={<Mouse />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
