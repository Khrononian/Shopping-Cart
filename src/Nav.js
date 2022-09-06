import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Assets/Nav.css'

const Nav = (props) => {
    const navigate = useNavigate()
    const nav = useNavigate()

    useEffect(() => {
        if (window.localStorage.getItem('cartNum') !== null) window.localStorage.getItem('cartNum')
    }, [])

    // useEffect(() => {
    //     setCart(Number(window.localStorage.cartNum) + 1)
    // }, [cart])
    
    // window.localStorage.clear()
    // console.log(props)
    return (
        <nav>
            <div className='heading'>
                <p>Novus Computers</p>
            </div>
            <div className='links'>
                <Link to='/' state={{info: props.cart}}>Home</Link>
                <Link to='/products' state={{info: props.cart}}>Products</Link>
                {/* <button onClick={sendToProduct}>
                    Products
                </button> */}
                <Link to='/products/laptops' state={{info: props.cartNum}}>Laptops</Link>
                {/* <button onClick={sendInfo}>
                    Laptops
                </button> */}
                <Link to='/products/mouse'>Mouse</Link>
            
                <Link to='/cart'
                    state={{
                        info: props.cartNum
                    }}>
                    {/* {props.location ? `Cart (${props.location.length})`
                    : `Cart (${props.cartNum.length})`
                    } */}
                    
                    {/* Cart ({window.localStorage.getItem('cartNum') === null ? 0 : window.localStorage.getItem('cartNum')}) */}
                    {/* Cart ({props.cartNum === undefined ? 0 : props.cartNum}) */}
                    {/* Cart ({props.cartNum === null || props.cartNum === undefined ? 0 : window.localStorage.cartNum}) */}
                    Cart ({window.localStorage.cartNum === null || window.localStorage.cartNum === undefined ? 0 : window.localStorage.cartNum})
                </Link>
                
                {console.log('Save v2', window.localStorage)}
            </div>
        </nav>
    )
}

export default Nav