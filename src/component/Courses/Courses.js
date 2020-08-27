import React from 'react';

import Fakedata from '../Fakedata/Fakedata';
import Product from '../Product/Product';
import "./Courses.css"
import { useState } from 'react';
import Header from '../Header/Header'
import Cart from '../Modal/Cart';


const Courses = () => {
    const courses = [...Fakedata];
    const [cartQuantity, setCartQuantity] = useState([]);
    const [cart, setCart] = useState([]);


    const eventHandler = (product) => {
        const newCart = [...cartQuantity, product]
        setCartQuantity(newCart);
        setCart(product)
    }
    const cartHandler = (displayStyle) => {
        const cartDiv = document.querySelector(".cart-div")
        cartDiv.style.display = displayStyle;
    }
    // const cartHandler2 = () => {
    //     const cartDiv = document.querySelector(".cart-div")
    //     cartDiv.style.display = "block";
    // }
    return (
        <div>
            <Header cartHandler={cartHandler} cartQuantity={cartQuantity}></Header>
            <div className="cart-div">
                <Cart cart={cartQuantity} cartHandler={cartHandler}></Cart>
            </div>
            <div className="courses-div">

                {
                    courses.map(product => <Product eventHandler={eventHandler} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Courses;