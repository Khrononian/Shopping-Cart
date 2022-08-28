import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav'
import Products from './Products'
import '../Assets/Products.css'

const Laptops = (props) => {
  const laptops = [
    {
        title: "Acer 15.6 Touchscreen Chromebook with Chrome OS - Intel Processor - 4GB RAM - 64GB Flash Storage",
        price: "$169.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_2879aee2-051b-440a-9b45-78c8f358829e"
    },
    {
        title: "Lenovo 14 Chromebook Laptop with Chrome OS - Intel Processor - 4GB RAM - 64GB Flash Storage",
        price: "$129.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_27aa61b8-b833-423f-9560-d49b6fb9fe3d",
    },
    {
        title: "HP 14 Laptop with Windows S mode - AMD Processor - 4GB RAM Memory - 64GB Flash Storage",
        price: "$249.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_c677abd3-8bdf-4090-ab1d-59d8c618a74a"
    },
    {
        title: "HP 14 Laptop with Windows Home in S Mode - Intel Pentium Processor - 4GB RAM Memory - 128GB SSD Storage - Black",
        price: "$219.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_8ade11be-ddf8-4ea7-aac9-40ead6e0cc8b"
    },
    {
        title: "HP Victus 15.6 144Hz FHD Gaming Laptop - Intel Core i5-12450H, 16GB RAM, 512GB SSD, Nvidia RTX 3050 Silver",
        price: "$859.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_debb64c5-2b82-46aa-9d61-3fa5ed3de07f"
    },
    {
        title: "HP 15.6 Laptop with Windows Home in S Mode Intel Pentium Processor - 8GB RAM - 256GB SSD Storage Blue",
        price: "$269.99",
        image: "https://target.scene7.com/is/image/Target/GUEST_3bb8b683-f0a7-4b7e-8207-ea716a72f41d"
    }
  ]

  return (
    <div>
      <Nav />
      <header>
        <h1>Laptops</h1>
      </header>

      <div className='grid'>
        {laptops.map((laptop, index) => {
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
      </div>
    </div>
  )
}

export default Laptops