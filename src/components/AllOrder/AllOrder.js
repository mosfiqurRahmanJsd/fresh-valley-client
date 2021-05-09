import { React, useState, useEffect } from "react";
import Header from "../Header/Header";

const AllOrder = () => {
  const [viewOrder, setViewOrder] = useState([]);
  useEffect(() => {
    fetch("https://fast-lowlands-21209.herokuapp.com/viewOrders")
      .then((res) => res.json())
      .then((data) => setViewOrder(data));
  });
  return (
    <div>
      <Header></Header>
      <div className="container">
        <h1 className="text-center">Order History</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Order Date</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
                viewOrder.map(order => 
                <tr>
                    <th scope="row">{order.email}</th>
                    <td>{order.orderTime}</td>
                    <td>{order.name}</td>
                    <td>$ {order.price}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
