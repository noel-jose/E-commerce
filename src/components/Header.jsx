import React from "react";
import logo from "../img/logo.png";
import "./Header.scss";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <input type="text" placeholder="&#xF002;  Search Something" />
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
