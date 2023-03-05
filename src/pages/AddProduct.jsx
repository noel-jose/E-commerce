import React from "react";
import "./AddProduct.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../App";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const { makeNotficationVisible } = useContext(ProductContext);

  const addProduct = async (product) => {
    const res = axios.post(
      process.env.REACT_APP_BACKEND_URL,
      JSON.stringify(product),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log("Product added successfully");
  };

  return (
    <div className="addproduct">
      <h2 className="addproduct__heading">Add a Product</h2>
      <form action="/" method="post">
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            id=""
            required
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="desc"
            id=""
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <div>
            <span>
              <input
                type="radio"
                name="category"
                value="electronics"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              Electronics
            </span>
            <span>
              <input
                type="radio"
                name="category"
                value="men's clothing"
                id=""
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              Men's Clothing
            </span>
            <span>
              <input
                type="radio"
                name="category"
                value="women's clothing"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              Women's Clothing
            </span>
            <span>
              <input
                type="radio"
                name="category"
                value="jewelery"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              Jewellery
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <div>
            <span>
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              5
            </span>
            <span>
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              4
            </span>
            <span>
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              3
            </span>
            <span>
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              2
            </span>
            <span>
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              1
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="Rating Count">Rating Count</label>
          <input
            type="number"
            name="ratingcount"
            required
            onChange={(e) => {
              setRatingCount(e.target.value);
            }}
          />
        </div>
        <input
          className="addproduct__submit"
          type="submit"
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            console.log(
              productName,
              " ",
              price,
              " ",
              desc,
              " ",
              category,
              " ",
              rating,
              " ",
              ratingCount
            );
            addProduct({
              id: Math.random,
              title: productName,
              price: price,
              description: desc,
              category: category,
              image: image,
              rating: { rate: rating, count: ratingCount },
            });
            navigate("/", { replace: true });
            makeNotficationVisible("Succesfully added the product");
          }}
        />
      </form>
    </div>
  );
};

export default AddProduct;
