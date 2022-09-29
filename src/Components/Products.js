import React from 'react'
import Laptops from './Laptops'
import Mouse from './Mouse'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Nav from '../Nav'
import '../Assets/Products.css'

const Products = (props) => {
  const [cartNum, setCartNum] = useState(window.localStorage.getItem('cartNum'))
  const [cartInfo, setCartInfo] = useState([])
  const cartData = []
  const products = [];

  useEffect(() => {
    const savedProducts = JSON.parse(window.localStorage.getItem('products'))
    const savedCart = JSON.parse(window.localStorage.getItem('cartData'))
    
    if (products[0] === null) products.splice(0, 1)
    // JSON.parse(window.localStorage.getItem('products')).filter(product => product === null)
    
    for (let product in savedProducts) {
      products.push(savedProducts[product])
    }
    for (let data in savedCart) {
      // JSON.parse(window.localStorage.getItem('cartData')).concat(savedCart[data])
      cartData.push(savedCart[data])
      // setCartInfo(cartInfo.concat(savedCart[data]))
      // setCartInfo(prevCart => prevCart.concat(savedCart[data]))
      // window.localStorage.setItem('cartInfo', JSON.stringify(cartInfo))
    }
    // window.localStorage.setItem('laptops', JSON.stringify(props.laptops))
    // window.localStorage.setItem('mouse', JSON.stringify(props.mouse))
    console.log('Intro', products, window.localStorage)
    // products.concat(savedProducts)
    
  }, [products, cartData])
  
  // window.localStorage.clear()
  console.log('LAPPY', props)
  const addToCart = event => {
    const findLaptop = props.laptops.find(item => item.title === event.nativeEvent.path[2].firstChild.innerText)
    const findMouse = props.mouse.find(item => item.title === event.nativeEvent.path[2].firstChild.innerText)
    
    if (findLaptop) {
      setCartInfo(cartInfo.concat(findLaptop))
      
      getItemType(findLaptop)
    }

    if (findMouse) {
      setCartInfo(cartInfo.concat(findMouse))

      getItemType(findMouse)
    }

    setCartNum(Number(cartNum) + 1)
    window.localStorage.setItem('products', JSON.stringify(products))
    window.localStorage.setItem('cartData', JSON.stringify(cartData))
    console.log('PRO RO', products)
  }

  const getItemType = (type) => {
    JSON.parse(window.localStorage.getItem('products'))
    JSON.parse(window.localStorage.getItem('cartData'))
    console.log('ARRAY', cartData, products, cartInfo)
    if (!window.localStorage.total) {
      window.localStorage.setItem('total', Number(type.price))
      window.localStorage.setItem('Total', Number(type.price) + Number(window.localStorage.total))
      window.localStorage.setItem('cartNum', Number(cartNum) + 1)
      setCartNum(Number(cartNum) + 1)
      type.quantity = 1
      products.push(type.title)
      cartData.push(type)
    } else if (cartData.find(current => current.title === type.title) ) {
      const index = cartData.findIndex(current => current.title === type.title)
      
      cartData[index].quantity++
      setCartNum(Number(cartNum) + 1)

      console.log('QU', type, cartData, window.localStorage)
      window.localStorage.setItem('total', Number(type.price) + Number(window.localStorage.total))
      window.localStorage.setItem('cartData', JSON.stringify(cartData))
      window.localStorage.setItem('cartNum', Number(cartNum) + 1)
  
      return
    } else {
      window.localStorage.setItem('total', Number(type.price) + Number(window.localStorage.total))
      window.localStorage.setItem('cartNum', Number(cartNum) + 1)
      products.push(type.title)
      cartData.push(type)
      console.log('ME ME', window.localStorage)
      type.quantity = 1
      setCartNum(Number(cartNum) + 1)
    }
  }

  return (
    <div id='main'>
      
      <Nav cartNum={cartNum} products={JSON.parse(window.localStorage.getItem('products'))} />
      <header> 
        <h1>All Products</h1>
      </header>
      {/* <div className='grid'> */}
        {/* {props.laptops.map((laptop, index) => {
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
        })} */}
        <Laptops laptops={props.laptops} data={addToCart}/>
        <Mouse mouse={props.mouse} data={addToCart}/>
        {/* {props.mouse.map((current, index) => {
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
        })} */}
      </div>
    // </div>
  )
}

export default Products