import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.css"
import SingleCart from '../SingleCart/SingleCart';

const Cart = (props) => {
    const cart = props.cart;
    const price = cart.reduce((total, num) => total + num.price, 0);
    return (
        <div className="cart">
            <div>
                {
                    cart.map(singleCart => <SingleCart singleCart={singleCart}></SingleCart>)
                }
            </div>
            <div className="total-price" >
                <h1>Total:</h1>
                <h1> ${price}</h1>
            </div>
            <Button onClick={() => props.showingCart("none")} variant="secondary">Close</Button>
        </div >
    );
};

export default Cart;