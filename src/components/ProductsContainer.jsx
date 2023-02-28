import React, { useEffect } from "react";
import "./ProductContainer.scss";
import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { ProductContext } from "../App";
import Button from "./Button";

const ProductsContainer = ({ category, maxPrice, rating }) => {
  const increaseProductCount = () => {
    console.log("Button clicked");
    setProductCount((prev) => prev + 3);
  };

  const { products } = useContext(ProductContext);
  const [filtered, setFiltered] = useState(products);
  const [productCount, setProductCount] = useState(3);

  // useEffect(() => {
  //   category == "all"? setFiltered((products)) : setFiltered(()=>)
  // }, [category]);

  const filterProducts = () => {
    const filtered = products;

    
  };

  useEffect(() => {
    setProductCount(products.length);
    setFiltered(products.filter((product) => product.price <= maxPrice));
  }, [maxPrice, category, rating]);

  return (
    <div>
      <div className="productContianer">
        {filtered.slice(0, productCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {productCount < products.length ? (
        <Button text="Load More" onclickfunc={increaseProductCount} />
      ) : null}
    </div>
  );
};

export default ProductsContainer;
