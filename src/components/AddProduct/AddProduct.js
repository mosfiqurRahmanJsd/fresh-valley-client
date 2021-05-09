import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://fast-lowlands-21209.herokuapp.com/addProduct`;
    //   console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side res", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7cfe7387c84999a6c4f1dc752c2ce9cf");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid">
      <div className="add-product">
        <h1>Add Product:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Product Name:</label>
          <input placeholder="Enter Name" {...register("name")} id="name" />
          <label htmlFor="weight">Weight:</label>
          <input
            placeholder="Enter Weight"
            {...register("weight")}
            id="weight"
          />

          <label htmlFor="price">Add Price:</label>
          <input
            placeholder="Enter Price"
            {...register("price", { required: true })}
            id="price"
          />

          <label htmlFor="name">Add Photo:</label>
          <input type="file" onChange={handleImageUpload} id="name" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
