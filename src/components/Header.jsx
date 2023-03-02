import React from "react";
import logo from "../img/logo.png";
import "./Header.scss";
import Button from "./Button";
import { useContext } from "react";
import { ProductContext } from "../App";
import { Link } from "react-router-dom";

const Header = () => {
  const { setSearchText } = useContext(ProductContext);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

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
        <Link to="/cart">
          <span>
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>Cart
          </span>
        </Link>
        <Button text="Add Product" />
      </div>
    </div>
  );
};

export default Header;
