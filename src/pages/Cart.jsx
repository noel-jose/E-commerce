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
    console.log("changed");
  }, [cart]);

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartItem product={item.product} quantity={item.quantity} />
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
