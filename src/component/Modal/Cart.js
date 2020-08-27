import React from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Cart.css"
import SingleCart from '../SingleCart/SingleCart';
const Cart = (props) => {
    let price = 0
    for (let i = 0; i < props.cart.length; i++) {
        const singlePrice = props.cart[i].price;
        price = price + singlePrice;
    }
    return (
        <div className="cart">

            <div>
                {
                    props.cart.map(singleCart => <SingleCart singleCart={singleCart}></SingleCart>)
                }
            </div>
            <div>
                <h1>Total: {price}</h1>
            </div>



            <Button onClick={() => props.cartHandler("none")} variant="secondary">Close</Button>


        </div >
    );
};

export default Cart;