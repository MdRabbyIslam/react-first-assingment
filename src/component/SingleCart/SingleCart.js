import React from 'react';
import './SingleCart.css';
const SingleCart = (props) => {
    return (
        <div>
            <div className="singleCart-div">
                <h5> ${props.singleCart.name}</h5>
                <h5 style={{ marginRight: "15px" }}> ${props.singleCart.price}</h5>

            </div>
        </div>
    );
};

export default SingleCart;