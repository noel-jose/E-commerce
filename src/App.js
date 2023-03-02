import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./pages/AddProduct";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState(new Map());
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

  const addToCart = (productId) => {
    if (cart.has(productId)) {
      const quantity = cart.get(productId);
      setCart(new Map(cart.set(productId, quantity + 1)));
    } else {
      setCart(new Map(cart.set(productId, 1)));
    }
    console.log(cart);
  };

  const removeFromCart = (productId) => {
    if (cart.has(productId)) {
      const quantity = cart.get(productId);
      console.log("The quantity before deleting ", quantity);
      if (quantity == 1) {
        cart.delete(productId);
        const updateCart = new Map(cart);
        setCart(updateCart);
      } else setCart(cart.set(productId, quantity - 1));
      console.log("remove from cart called");
      console.log(cart);
    }
  };

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
          addToCart,
          removeFromCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product" element={<SingleProduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="addproduct" element={<AddProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    )
  );
}

export default App;
