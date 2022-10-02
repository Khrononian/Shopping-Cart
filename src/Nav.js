import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Assets/Nav.css'

const Nav = (props) => {
    useEffect(() => {
        if (window.localStorage.getItem('cartNum') !== null) window.localStorage.getItem('cartNum')
    }, [])

    return (
        <nav id='nav'>
            <div className='heading'>
                <p>Novus Computers</p>
            </div>
            <div className='links'>
                <Link to='/' state={{info: props.cart}}>Home</Link>
                <Link to='/products' state={{info: props.cart}}>Products</Link>
                <Link to='/cart'
                    state={{
                        info: props.cartNum
                    }}>
                    
                    Cart ({window.localStorage.cartNum === null || window.localStorage.cartNum === undefined ? 0 : window.localStorage.cartNum})
                </Link>
            </div>
        </nav>
    )
}

export default Nav