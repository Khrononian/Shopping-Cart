import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ProductData from './ProductData'
import Nav from '../Nav'
import '../Assets/Products.css'

const Products = (props) => {
  const [cartNum, setCartNum] = useState(window.localStorage.getItem('cartNum'))
  const [cartData, setCartData] = useState([])
  const products = [];

  // USE CART DATA TO POST THE PRODUCTS IN CART INTO THE CART PAGE FOR DISPLAY. 
  // USE SET TO ADD NEW ONES, MAP THE ARRAY OF OBJECTS TO POST THE DATA (CODE GOES IN CART.JS)
  // SAVE THE DATA

  useEffect(() => {
    const savedProducts = JSON.parse(window.localStorage.getItem('products'))
    
    
    if (products[0] === null) products.splice(0, 1)
    // JSON.parse(window.localStorage.getItem('products')).filter(product => product === null)
    
    for (let product in savedProducts) {
      products.push(savedProducts[product])
    }
    // products.concat(savedProducts)
    
  }, [products])
  
  // window.localStorage.clear()
  
  console.log('Prop', cartNum)
  const addToCart = event => {
    console.log(window.localStorage)
    const findLaptop = props.laptops.find(item => item.title === event.nativeEvent.path[2].firstChild.innerText)
    const findMouse = props.mouse.find(item => item.title === event.nativeEvent.path[2].firstChild.innerText)
    
    if (findLaptop) {
      
      JSON.parse(window.localStorage.getItem('products'))
      products.push(findLaptop.title)
      // console.log('Product', findLaptop)
      setCartData(cartData.concat(findLaptop))
      console.log('CC', cartData)
      // console.log('Count', JSON.parse(window.localStorage.getItem('products')))
    }

    if (findMouse) {
      JSON.parse(window.localStorage.getItem('products'))
      products.push(findMouse.title)
    }

    setCartNum(Number(cartNum) + 1)
    window.localStorage.setItem('products', JSON.stringify(products))
    window.localStorage.setItem('cartNum', JSON.parse(window.localStorage.getItem('products')).length)
    window.localStorage.setItem('cartData', JSON.stringify(cartData))
    // setCartNum(JSON.parse(window.localStorage.getItem('products')).length)
    console.log('Product Num - SETS STATE BEFORE', cartNum, products, window.localStorage)
    // console.log('Text', findLaptop)
  }

  return (
    <div>
      <Nav cartNum={cartNum} products={JSON.parse(window.localStorage.getItem('products'))} />
      <header> 
        <h1>All Products</h1>
      </header>
      <div className='grid'>
        {props.laptops.map((laptop, index) => {
          return (
            <div className='card' key={index}>
              <div >
                <img className='images' src={laptop.image} alt='Laptop' />
              </div>
              <div className='bottom'>
                <h2>{laptop.title}</h2>
                <div className='btn'>
                  <button onClick={addToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          )
        })}

        {props.mouse.map((current, index) => {
          return (
            <div className='card' key={index}>
              <div>
                <img className='images' src={current.image} alt='Mouse' />
              </div>
              <div className='bottom'>
                <h2>{current.title}</h2>
                <div className='btn'>
                  <button onClick={addToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products