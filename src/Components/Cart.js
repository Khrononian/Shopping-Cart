import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import '../Assets/Cart.css'

const Cart = () => {
    const [number, setNumber] = useState([]);
    const [price, setPrice] = useState(0)
    let value = null
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
        const copiedArray = number.concat(savedProducts)
        
        if (productName) {
            productName.quantity++

            JSON.parse(window.localStorage.getItem('cartData'))
            .forEach(currentProduct => {
                if (currentProduct.title === productName.title) {
                    const prices = JSON.parse(window.localStorage.getItem('cartData'))
                    .map(current => current.price * (current.quantity))
                    .reduce((previousValue, currentValue) => Math.round(Number(previousValue) * 100 + Number(currentValue) * 100) / 100, Number(currentProduct.price))
                    
                    console.log('NOW')
                    window.localStorage.setItem('total', prices)
                }
                
                // const prices = JSON.parse(window.localStorage.getItem('cartData'))
                // .map(current => current.price * (current.quantity))
                // .reduce((previousValue, currentValue) => Math.round(Number(previousValue) * 100 + Number(currentValue) * 100) / 100, Number(currentProduct.price))
                
                console.log('Name', currentProduct, productName)
                // if (productName.quantity === 1 &&  productName) {
                //     console.log('First Add')
                //     window.localStorage.setItem('total', window.localStorage.getItem('Total'))
                // }
                // else {
                //     console.log('ADDED')
                //     window.localStorage.setItem('total', prices)
                // }
            })
            
            setNumber(copiedArray);
            // setPrice(prices)
            // Number(window.localStorage.getItem('total')) * 2
            console.log('Hi', savedProducts, productName, number)
        }
        
        window.localStorage.setItem('cartData', JSON.stringify(savedProducts))
        // window.localStorage.setItem('total', prices)
        
        console.log('After', savedProducts, window.localStorage, number)
    }
    // window.localStorage.clear()
    const decrementProduct = event => {
        const productName = savedProducts.find(product => product.title === event.nativeEvent.path[2].firstChild.innerText)
        const copiedArray = number.concat(savedProducts)

        if (productName) {
            if (productName.quantity !== 1) productName.quantity--
            else return

            
            const prices = Number(window.localStorage.getItem('total')) - productName.price
            
            // .reduce((previousValue, currentValue) => Math.round(Number(previousValue) * 100 - Number(productName.price) * 100) / 100)
            
            // if (current.quantity === 1 && !productName) window.localStorage.setItem('total', window.localStorage.getItem('Total'))
            // else window.localStorage.setItem('total', prices)

            console.log('Price', prices, productName.price)
            window.localStorage.setItem('total', prices)
            

            
            setNumber(copiedArray)
            console.log('PRO', productName, savedProducts)

            window.localStorage.setItem('cartData', JSON.stringify(savedProducts))
        }
    }
    
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
                                <p>${product.price}</p>
                                <div className='btns'>
                                    <button onClick={decrementProduct}>-</button>
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
                {JSON.parse(window.localStorage.getItem('cartData')) === null ? 'Total: $0' : `Total: $${window.localStorage.getItem('total')}` }
                </h2>
                <button className='footer-btn'>Check Out</button>
            </div>
        </div>
    )
}

export default Cart