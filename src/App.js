import './App.css';
import React, { useState  } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

const App = () => {
  // const [cartNum, setCartNum] = useState([]);
  // // const locate = useLocation();

  // const getData = (product) => {

  //   setCartNum([product])
  // }
  
  return (
    <div>
      {/* <Nav cartNum={cartNum} location={locate.state.info} data={getData}/> */}
      {/* <Nav cartNum={cartNum} getData={getData}/> */}
      <Nav products={JSON.parse(window.localStorage.getItem('products'))}/>
      <header>
        <h1>Game Anywhere,<br/>All Day</h1>
      </header>
      <Link to='/products' className='link-tag'>Shop Now</Link>
    </div>
  )
}

export default App
