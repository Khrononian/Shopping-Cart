import React from 'react'
import { useState, useEffect } from 'react'
import ProductData from './ProductData'
import '../Assets/Products.css'

const Products = (props) => {
  // const [product, setProducts] = useState(null)

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'd5c7b459b7msh3709ab41febef03p1d7c75jsn6c10d4ece44d',
  //       'X-RapidAPI-Host': 'target1.p.rapidapi.com'
  //     }
  //   };

  //   const fetchData = async () => {
  //     const data = await fetch('https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=laptops&count=6&offset=0&default_purchasability_filter=true&sort_by=relevance', options)
  //     const postData = await data.json()

  //     if (data.status === 200)  {
  //       console.log('TRUE', data)
        
  //     }

  //     if (product === null) setProducts(postData.data.search)
  //     // else if (product === null) setProducts(postData.products)
  //     console.log(product, postData.data.search.products)
  //     console.log(data, postData.data.search.products)
  //   }
    
  //   fetchData()

  // }, [])

  return (
    <div>
      <header> 
        <h1>All Products</h1>
      </header>

      {console.log(props)}
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
                  <button>Add to Cart</button>
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
                  <button>Add to Cart</button>
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