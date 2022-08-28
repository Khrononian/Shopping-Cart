import React from 'react'
import Nav from '../Nav'
import '../Assets/Cart.css'

const Cart = () => {
    return (
        <div>
            <Nav storedData={window.localStorage}/>
            {/* {console.log('Save', window.localStorage)} */}
            <header>
                <h1>Shopping Cart</h1>
            </header>
            <div className='product'>
                {
                    JSON.parse(window.localStorage.getItem('cartData')).map((product, index) => {
                        return (
                            
                                <div className='cards'>
                                    <h2>{product.title}</h2>
                                    <img src={product.image} alt='Laptop' />
                                    <p>{product.price}</p>
                                    <div className='btns'>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart