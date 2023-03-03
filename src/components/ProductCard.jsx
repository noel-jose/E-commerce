import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="" />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </Link>
    </div>
  );
};

export default React.memo(ProductCard);
