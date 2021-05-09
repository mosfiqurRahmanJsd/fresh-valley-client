import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../App";

import Header from "../Header/Header";
import "./Order.css";

const Order = () => {
  const { value2 } = useContext(ProductsContext);
  const [loggedInUser, setLoggedInUser] = value2;
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fast-lowlands-21209.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data[0]));
  }, [productId]);

  const handleSubmit = () => {
    const orderDetails = {
      ...loggedInUser,
      ...product,
      orderTime: new Date(),
    };
    console.log(orderDetails);

    fetch(`https://fast-lowlands-21209.herokuapp.com/addOrder`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data) {
            alert('Order Placed Successfully')
        }
    });
  };

  return (
    <div className="container">
      <Header></Header>
      <h1 className="mt-5">Checkout</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>1</td>
            <td>$ {product.price}</td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-success checkout" onClick={handleSubmit}>
        Checkout
      </button>
    </div>
  );
};

export default Order;
