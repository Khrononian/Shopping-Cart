import React from 'react'
import Laptops from './Laptops'
import Mouse from './Mouse'
import { useState, useEffect } from 'react'

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
    
    for (let product in savedProducts) {
      products.push(savedProducts[product])
    }
    for (let data in savedCart) {
      cartData.push(savedCart[data])
    }
  }, [products, cartData])
  
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
  }

  const getItemType = (type) => {
    JSON.parse(window.localStorage.getItem('products'))
    JSON.parse(window.localStorage.getItem('cartData'))
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

      window.localStorage.setItem('total', Number(type.price) + Number(window.localStorage.total))
      window.localStorage.setItem('cartData', JSON.stringify(cartData))
      window.localStorage.setItem('cartNum', Number(cartNum) + 1)
  
      return
    } else {
      window.localStorage.setItem('total', Number(type.price) + Number(window.localStorage.total))
      window.localStorage.setItem('cartNum', Number(cartNum) + 1)
      products.push(type.title)
      cartData.push(type)
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
        <Laptops laptops={props.laptops} data={addToCart}/>
        <Mouse mouse={props.mouse} data={addToCart}/>
      </div>
  )
}

export default Products