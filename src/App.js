import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);
  const BACKEND_URL = "http://localhost:8000/products";

  const fetchData = () => {
    axios
      .get(BACKEND_URL)
      .then((res) => {
        setProducts(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [isLoaded]);

  return (
    isLoaded && (
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          cart,
          setCart,
          fetchData,
          searchText,
          setSearchText,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product" element={<SingleProduct />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    )
  );
}

export default App;
