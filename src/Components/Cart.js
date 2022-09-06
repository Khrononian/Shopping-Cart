import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import '../Assets/Cart.css'

const Cart = () => {
    const [number, setNumber] = useState([]);
    const [price, setPrice] = useState(0)
    let initialValue = window.localStorage.getItem('total') 
    // const prices = JSON.parse(window.localStorage.getItem('cartData')) === null ? null  
    // : JSON.parse(window.localStorage.getItem('cartData'))
    // .map(current => current.price * current.quantity)
    // .reduce((previousValue, currentValue) => Math.round(Number(previousValue) * 100 + Number(currentValue) * 100) / 100)
    const savedProducts = [];
    

    useEffect(() => {

        
        if (window.localStorage.getItem('cartData') === null) return 
        else {
            JSON.parse(window.localStorage.getItem('cartData')).map(current => (savedProducts.push(current)))
            // window.localStorage.setItem('total', Number(window.localStorage.getItem('total')))
            
            // setPrice(window.localStorage.getItem('total'))
        } 
        console.log('FRI', savedProducts, window.localStorage, typeof window.localStorage.total)
    }, [savedProducts])
    // USE SAVED PRODUCTS TO CHANGE THE QUANTITY AND THEN POST IT TO THE SAVED DATA
    // OR LOOK INTO ANOTHER IDEA IF POSSIBLE

    const incrementProduct = event => {
        const productName = savedProducts.find(product => product.title === event.nativeEvent.path[2].firstChild.innerText)
        const prices = JSON.parse(window.localStorage.getItem('cartData'))
        .map(current => current.price * current.quantity )
        .reduce((previousValue, currentValue) => Math.round(Number(previousValue) * 100 + Number(currentValue) * 100) / 100, initialValue)
        const copiedArray = number.concat(savedProducts)

        if (productName) {
            productName.quantity += 1

            setNumber(copiedArray);
            // setPrice(prices)
            // Number(window.localStorage.getItem('total')) * 2
            console.log('Hi', savedProducts, productName, number)
        }
        
        window.localStorage.setItem('cartData', JSON.stringify(savedProducts))
        window.localStorage.setItem('total', prices)
        // setNumber(Number(number[1].quantity) + 1)
        // window.localStorage.setItem('cartData', JSON.stringify(savedProducts[0]))
        console.log('After', savedProducts, window.localStorage, number)
    }
//  window.localStorage.clear()
    return (
        <div className='content'>
            <Nav storedData={window.localStorage}/>
            {console.log('Save', number, window.localStorage)}
            <header>
                <h1>Shopping Cart</h1>
            </header>

            <div className='product'>
                {
                    window.localStorage.length === 0 ? null : JSON.parse(window.localStorage.getItem('cartData')).map((product, index) => {
                        return (
                            <div className='cards' key={index}>
                                {console.log('num', number)}
                                <h2>{product.title}</h2>
                                <img src={product.image} alt='Laptop' />
                                <p>{product.price}</p>
                                <div className='btns'>
                                    <button>-</button>
                                    <p>{product.quantity}</p>
                                    <button onClick={incrementProduct}>+</button>
                                </div>
                                
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className='footer'>
                <h2>
                {JSON.parse(window.localStorage.getItem('cartData')) === null ? 'Total: $0' : `Total: $${window.localStorage.getItem('total')}` } 1019.94 7149.45 1999.92
                </h2>
            </div>
        </div>
    )
}

export default Cart