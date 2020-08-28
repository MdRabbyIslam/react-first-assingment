import React from 'react';
import Fakedata from '../Fakedata/Fakedata';
import Product from '../Product/Product';
import "./Courses.css"
import { useState } from 'react';
import Header from '../Header/Header'
import Cart from '../Modal/Cart';
import { queryAllByAttribute } from '@testing-library/react';

const Courses = () => {
    const courses = [...Fakedata];
    const [cartQuantity, setCartQuantity] = useState([]);

    const cartHandler = (product) => {
        const item = cartQuantity.find(item => item.name === product.name);
        if (item !== undefined) return alert("You already added this in your cart");

        const newCart = [...cartQuantity, product]
        setCartQuantity(newCart);
    }

    const showingCart = (displayStyle) => {
        const cartDiv = document.querySelector(".cart-div")
        cartDiv.style.display = displayStyle;
    }


    return (
        <div>
            <Header showingCart={showingCart} cartQuantity={cartQuantity}></Header>
            <div className="cart-div">
                <Cart cart={cartQuantity} showingCart={showingCart}></Cart>
            </div>
            <div className="courses-div">
                {
                    courses.map(product => <Product cartHandler={cartHandler} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Courses;