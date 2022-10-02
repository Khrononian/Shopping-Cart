import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import '../Assets/Cart.css'

const Cart = () => {
    const [number, setNumber] = useState([]);
    const savedProducts = [];
    
    useEffect(() => {
        if (window.localStorage.getItem('cartData') === null) return 
        else {
            JSON.parse(window.localStorage.getItem('cartData')).map(current => (savedProducts.push(current)))
        } 
    }, [savedProducts])

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
                    
                    window.localStorage.setItem('total', prices)
                }
            })
            setNumber(copiedArray);
        }
        window.localStorage.setItem('cartData', JSON.stringify(savedProducts))
    }
    // window.localStorage.clear()
    const decrementProduct = event => {
        const productName = savedProducts.find(product => product.title === event.nativeEvent.path[2].firstChild.innerText)
        const copiedArray = number.concat(savedProducts)

        if (productName) {
            if (productName.quantity > 1) productName.quantity--
            else if (JSON.parse(window.localStorage.getItem('cartData')).find(current => current.title === productName.title)) {
                const index = JSON.parse(window.localStorage.getItem('cartData')).findIndex(current => current.title === productName.title)
                const array = JSON.parse(window.localStorage.getItem('cartData')).splice(index, 1)
                const productIndex = JSON.parse(window.localStorage.getItem('products')).indexOf(productName.title)
                const products = JSON.parse(window.localStorage.getItem('products'))

                savedProducts.splice(index, 1)
                products.splice(productIndex, 1)
                
                window.localStorage.setItem('cartData', JSON.stringify(array))
                window.localStorage.setItem('products', JSON.stringify(products))
                window.localStorage.setItem('cartNum', products.length)
            } 
            const prices = Math.round(Number(window.localStorage.getItem('total')) * 100 - productName.price * 100)  / 100

            window.localStorage.setItem('total', prices)
            setNumber(copiedArray)
            window.localStorage.setItem('cartData', JSON.stringify(savedProducts))
        }
    }
    
    return (
        <div className='content'>
            <Nav storedData={window.localStorage}/>
            <header>
                <h1>Shopping Cart</h1>
            </header>

            <div className='product'>
                {
                    window.localStorage.length === 0 ? null : JSON.parse(window.localStorage.getItem('cartData')).map((product, index) => {
                        return (
                            <div className='cards' key={index}>
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