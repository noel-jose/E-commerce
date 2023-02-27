import React from "react";
import logo from "../img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <input type="text" placeholder="&#xF002;  Search Something" />
        <span>
          <i class="fa-regular fa-user"></i>
          Account
        </span>
        <span>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>Cart
        </span>
      </div>
    </div>
  );
};

export default Header;
