import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <p>Novus Computers</p>
            </div>
            <div>
                <Link to='/'><p>Home</p></Link>
                <Link to='/products'><p>Products</p></Link>
                {/* <p> CART HERE </p> */}
            </div>
        </nav>
    )
}

export default Nav