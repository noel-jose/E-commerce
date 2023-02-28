import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
