import React, { useEffect } from "react";
import "./CartItem.scss";
import StartContainer from "../StarContainer/StarContainer";
import { useContext, useState } from "react";
import { ProductContext } from "../../App";

const CartItem = ({ product, quantity }) => {
  const { cart, setCart, addToCart, removeFromCart, makeNotficationVisible } =
    useContext(ProductContext);
  const [itemquantity, setItemQuantity] = useState(quantity);

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.product.id != product.id));
    makeNotficationVisible("Removed the product from the cart");
  };

  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={product.image}
        alt={product.title}
      />
      <div>
        <span className="cartItem__title">{product.title}</span>
        <StartContainer rating={product.rating.rate} />
      </div>

      <div className="cartItem__button_container">
        <span
          onClick={() => {
            setItemQuantity((prev) => {
              if (prev <= 1) {
                removeProduct(product);
                return prev;
              } else {
                removeFromCart(product);
                return prev - 1;
              }
            });
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </span>
        <span className="CartItem__quantity">{itemquantity}</span>
        <span
          onClick={() => {
            setItemQuantity((prev) => prev + 1);
            addToCart(product);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>

      <span className="cartItem__Price">
        ${(itemquantity * product.price).toFixed(2)}
      </span>
      <span
        className="cartItem__RemoveProduct"
        onClick={() => {
          removeProduct(product);
        }}
      >
        <i className="fa-solid fa-x"></i>
      </span>
    </div>
  );
};

export default CartItem;
