import React from "react";
import "./ProductContainer.scss";
import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { ProductContext } from "../App";

const ProductsContainer = () => {
  const { products } = useContext(ProductContext);
  const [filtered, setFiltered] = useState(products);

  return (
    <div className="productContianer">
      {filtered.slice(0, 20).map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
