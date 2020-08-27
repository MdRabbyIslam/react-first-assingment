import React from 'react';
import { Button, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css"
const Product = (props) => {
    // console.log(props)
    // console.log(props.product)
    const { name, price, img, mentor, beforePrice, rating } = props.product;

    return (
        <div className="product-div">
            <Card className="card" >
                <Card.Img style={{ height: "12rem" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text style={{ textAlign: "left", lineHeight: "2em", fontWeight: "500" }}>
                        <span className="instructor">Instructor: {mentor}</span>
                        <br />
                        <span>Ratings: <span className="ratings">{rating}</span></span>
                        <br />
                        <span > Price:
                            <span className="price"> ${price} </span>
                            <span className="before-price"> {beforePrice} </span>
                        </span>
                    </Card.Text>
                    <Button onClick={() => props.eventHandler(props.product)} class="enroll-btn" variant="danger">Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Product;