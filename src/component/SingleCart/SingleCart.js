import React from 'react';
import './SingleCart.css';

const SingleCart = (props) => {
    return (
        <div className="singleCart-div">
            <h5>{props.singleCart.name}</h5>
            <h5>{props.singleCart.price}</h5>
        </div>
    );
};

export default SingleCart;