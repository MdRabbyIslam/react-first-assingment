import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    const cartQuantity = props.cartQuantity;
    const cartHandler = props.cartHandler
    return (
        <div>

            <div className="header-div">
                <h1 className="header-heading">Our Courses</h1>
                <span onClick={() => cartHandler("block")} className="shopping-cart">
                    <small style={{ color: "red" }}>{cartQuantity.length}</small>
                    <p ><FontAwesomeIcon className="cart-icon" icon={faShoppingCart} /></p>
                </span>

            </div>


        </div>
    );
};

export default Header;