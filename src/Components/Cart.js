import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav'

const Cart = () => {
    const location = useLocation()
    return (
        <div>
            <Nav storedData={window.localStorage}/>
            {/* {console.log('Save', window.localStorage)} */}
            <header>
                <h1>Shopping Cart</h1>
            </header>
        </div>
    )
}

export default Cart