import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={product.image} alt="" />
      {product.title}
    </div>
  );
};

export default ProductCard;
