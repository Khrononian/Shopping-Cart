import React, { useState } from 'react'
import Nav from '../Nav'

const Mouse = () => {
  const [mouse, setMouse] = useState([
    {
        title: "Logitech Mouse (M185) - Blue",
        price: "$16.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_bbf82286-6d9a-40f0-b6fe-669368ca7fa8"
    },
    {
        title: "Logitech M317 Mouse - Blue Aurora",
        price: "$19.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_b051a763-bd93-4e7f-a7c9-dbc5dc69628b"
    },
    {
        title: "Logitech Mouse (M317) - Forest Floral",
        price: "$14.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_25ddf23e-6c7f-4df5-85a3-cd342a638d3c"
    },
    {
        title: "Logitech M317C Mouse - Bamboo Dream",
        price: "$20.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_98983a42-e07b-4127-8610-0729a26865c4"
    },
    {
        title: "Logitech Pebble Bluetooth Mouse M350 - Flora",
        price: "$29.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_021917bb-d99c-4179-be26-01340213d837"
    },
    {
        title: "Logitech G203 Gaming Mouse - Black (910-005790)",
        price: "$29.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_c03715da-bb93-4306-8ae4-19947b2ffeae"
    }
  ])

  return (
    <div>
      <Nav />
      <header>
        <h1>Mouse</h1>
      </header>

      <div className='grid'>
        {mouse.map((current, index) => {
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

export default Mouse