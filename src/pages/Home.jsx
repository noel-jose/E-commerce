import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../App";
import SideBar from "../components/SideBar/SideBar";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductsContainer from "../components/ProductContainer/ProductsContainer";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(1);
  const [filter, setFilter] = useState({
    category: false,
    maxPrice: false,
    rating: false,
  });

  return (
    <div className="home">
      <SideBar
        setCategory={setCategory}
        setMaxPrice={setMaxPrice}
        setRating={setRating}
        setFilter={setFilter}
        filter={filter}
      />

      <ProductsContainer
        category={category}
        maxPrice={maxPrice}
        rating={rating}
        filter={filter}
      />
    </div>
  );
};

export default Home;
