import React from "react";
import logo from "../img/logo.png";
import "./Header.scss";
import Button from "./Button";
import { useContext } from "react";
import { ProductContext } from "../App";

const Header = () => {
  const { setSearchText } = useContext(ProductContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <input
          type="text"
          placeholder="&#xF002;  Search Something"
          onInput={(e) => setSearchText(e.target.value)}
        />
        <span>
          <i className="fa-regular fa-user"></i>
          Account
        </span>
        <span>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>Cart
        </span>
        <Button text="Add Product" />
      </div>
    </div>
  );
};

export default Header;
