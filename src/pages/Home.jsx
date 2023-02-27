import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../App";
import SideBar from "../components/SideBar";
import ProductCard from "../components/ProductCard";
import ProductsContainer from "../components/ProductsContainer";

const Home = () => {
  return (
    <div>
      <SideBar />
      Home products
      <ProductsContainer />
    </div>
  );
};

export default Home;
