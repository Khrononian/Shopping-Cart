import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';

const App = () => {
  return (
    <div>
      <Nav products={JSON.parse(window.localStorage.getItem('products'))}/>
      <header>
        <h1>Game Anywhere,<br/>All Day</h1>
      </header>
      <Link to='/products' className='link-tag'>Shop Now</Link>
      <div className='img'>
        <img src='https://images4.alphacoders.com/972/thumbbig-9728.webp' alt='Tech' />
      </div>
    </div>
  )
}

export default App
