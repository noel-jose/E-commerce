import React, { useEffect } from "react";
import "./ProductContainer.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useState } from "react";
import { ProductContext } from "../../App";
import Button from "../Button/Button";

const ProductsContainer = ({ category, maxPrice, rating, filter }) => {
  const { searchText } = useContext(ProductContext);

  const increaseProductCount = () => {
    setProductCount((prev) => prev + 3);
  };

  const { products } = useContext(ProductContext);
  const [filtered, setFiltered] = useState([]);
  const [productCount, setProductCount] = useState(3);

  // useEffect(() => {
  //   category == "all"? setFiltered((products)) : setFiltered(()=>)
  // }, [category]);

  useEffect(() => {
    setFiltered(products);
  }, []);

  const filterProducts = () => {
    let filtered = products;
    if (filter.maxPrice == true) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }
    if (filter.category == true && category != "all") {
      filtered = filtered.filter((product) => product.category == category);
    }
    if (filter.rating == true && rating != "all") {
      filtered = filtered.filter((product) => product.rating.rate > rating);
    }
    if (searchText != " ") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFiltered(filtered);
    if (filter.rating || filter.category || filter.maxPrice)
      setProductCount(products.length);
  };

  useEffect(() => {
    filterProducts();
  }, [maxPrice, category, rating, searchText]);

  return (
    <div className="Container">
      <div className="productContianer">
        {filtered.length <= 0 ? (
          <h4 style={{ marginInline: "auto" }}>No Products found</h4>
        ) : (
          filtered
            .slice(0, productCount)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        )}
      </div>
      {productCount < filtered.length && filtered.length >= 3 ? (
        <Button text="Load More" onclickfunc={increaseProductCount} />
      ) : null}
    </div>
  );
};

export default React.memo(ProductsContainer);
