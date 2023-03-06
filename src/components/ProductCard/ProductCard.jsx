import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import StarContainer from "../StarContainer/StarContainer";
import { useContext } from "react";
import { ProductContext } from "../../App";

const ProductCard = ({ product }) => {
  const { addToCart, makeNotficationVisible } = useContext(ProductContext);
  return (
    <Link to={`/products/${product.id}`}>
      <div className="productCard">
        <img src={product.image} alt="" />
        <span className="productCard__title">{product.title.slice(0, 35)}</span>
        <div className="productCard__holder">
          <span className="productCard__price">${product.price}</span>
          <div className="productCard__ratingholder">
            <StarContainer rating={product.rating.rate} /> (
            {product.rating.count})
          </div>
        </div>
        <div
          className="productCard__button"
          onClick={(e) => {
            makeNotficationVisible("Added Product to cart");
            e.preventDefault();
            addToCart(product);
          }}
        >
          Add to cart
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);
