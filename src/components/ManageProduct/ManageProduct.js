import React from "react";
import { ProductsContext } from "../../App";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./ManageProduct.css";
import { useContext } from "react";

const ManageProduct = () => {
  const  { value }  = useContext(ProductsContext);
  const [events] = value; 
  // console.log(events);
  const deleteProduct = (id) => {
    fetch(`https://fast-lowlands-21209.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted success");
      });
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Wight</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map(product => (
            <tr>
              <th scope="row">{product.name}</th>
              <td>{product.weight} - gm</td>
              <td>$ {product.price}</td>
              <td>
                <button
                  className="border-none"
                  onClick={() => deleteProduct(product._id)}
                >
                  <DeleteForeverIcon></DeleteForeverIcon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
