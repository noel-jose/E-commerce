import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../App";
import "./Cart.scss";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("changed");
    setTotal(0);
    cart.forEach((item) => {
      setTotal((prev) => prev + item.product.price * item.quantity);
    });
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
