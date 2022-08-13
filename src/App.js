import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <header>
        <h1>Novus Computers</h1>
      </header>
      <button><Link to='/products'>Shop</Link></button>
    </div>
  )
}

export default App
