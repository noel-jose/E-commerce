import React from "react";
import "./CartItem.scss";
import StartContainer from "../components/StarContainer";
import { useContext, useState } from "react";
import { ProductContext } from "../App";

const CartItem = ({ product }) => {
  const { cart, setCart, addToCart, removeFromCart } =
    useContext(ProductContext);
  const [quantity, setQuantity] = useState(cart.get(product.id));

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
        <span className="CartItem__quantity">{quantity}</span>
        <span
          onClick={() => {
            setQuantity((prev) => prev + 1);
            addToCart(product.id);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>

      <span className="cartItem__Price">
        ${(quantity * product.price).toFixed(2)}
      </span>
      <span
        className="cartItem__RemoveProduct"
        onClick={() => {
          setCart((prev) => {
            const copy = new Map(prev);
            copy.delete(product.id);
            return copy;
          });

          // cart.delete(product.id);
          // const updatedCart = cart;
          // setCart(updatedCart);
          // console.log(updatedCart);
          // console.log(cart)
          // console.log("Delete Button Pressed");
        }}
      >
        <i className="fa-solid fa-x"></i>
      </span>
    </div>
  );
};

export default CartItem;
