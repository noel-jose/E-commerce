import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useState, useContext } from "react";
import "./SingleProduct.scss";
import StarContainer from "../components/StarContainer";
import { ProductContext } from "../App";
import Cart from "./Cart";

const SingleProduct = () => {
  const location = useLocation();
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);

  const product = location.state?.product;
  const [quantity, setQuantity] = useState(
    cart.has(product.id) ? cart.get(product.id) : 0
  );

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
            <span
              onClick={() =>
                setQuantity((prev) => {
                  if (prev <= 0) return 0;
                  else {
                    removeFromCart(product.id);
                    return prev - 1;
                  }
                })
              }
            >
              <i className="fa-solid fa-minus"></i>
            </span>
            <span className="singleproduct__quantity">{quantity}</span>
            <span
              onClick={() => {
                setQuantity((prev) => prev + 1);
                addToCart(product.id);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <Button
            text="Add to cart"
            onclickfunc={() => {
              addToCart(product.id);
              setQuantity(quantity + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
