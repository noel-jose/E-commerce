import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import "./SingleProduct.scss";
import StarContainer from "../components/StarContainer";

const SingleProduct = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(0);

  const product = location.state?.product;
  return (
    <div className="singleproduct">
      <img src={product.image} alt="" className="singleproduct__img" />
      <div className="singleproduct__right">
        <div className="singleproduct__main">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span>
            <StarContainer rating={product.rating.rate} />(
            {product.rating.count})
          </span>
        </div>
        <div className="singleproduct__price">${product.price}</div>
        <div className="singleproduct__addtocart">
          <div className="singleproduct__cart">
            <span onClick={() => setQuantity((prev) => prev - 1)}>
              <i className="fa-solid fa-minus"></i>
            </span>
            <span>{quantity}</span>
            <span onClick={() => setQuantity((prev) => prev + 1)}>
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <Button text="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
