import React from 'react'
import '../Assets/Products.css'

const Laptops = (props) => {
  return (
    <div>
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
                    <button onClick={props.data}>Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Laptops