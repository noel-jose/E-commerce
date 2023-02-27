import React from "react";
import { useContext } from "react";
import { ProductContext } from "../App";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      Home
      <div>{products}</div>
    </div>
  );
};

export default Home;
