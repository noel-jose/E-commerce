import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../App";
import "./Cart.scss";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { products, cart, setCart, addToCart, removeFromCart } =
    useContext(ProductContext);

  const [total, setTotal] = useState(0);

  const [cartList, setCartList] = useState([]);

  // cart.map((item) => {
  //   const cartItemIndex = products.findIndex(item == item.id);
  //   const cartItem = products[cartItemIndex];
  //   setCartList(cartList.push(cartItem));
  // });

  useEffect(() => {
    if (cart.size > 0) {
      console.log("in cart size great");
      cart.forEach((value, key) => {
        const cartItem = products.find((product) => product.id == key);
        setTotal((prev) => prev + value * cartItem.price);
        setCartList((prev) => [...prev, cartItem]);
        console.log(cartList);
      });
    } else {
      console.log("low");
    }
  }, [cart]);

  useEffect(() => {
    console.log("changed");
  }, [cart]);

  return (
    <div className="cart">
      {cart.size > 0 ? (
        <div>
          {cartList.map((product) => (
            <CartItem product={product} />
          ))}
          <span className="total">Total : ${total.toFixed(2)}</span>
        </div>
      ) : (
        <h3>Products are not available in cart</h3>
      )}
    </div>
  );
};

export default Cart;
