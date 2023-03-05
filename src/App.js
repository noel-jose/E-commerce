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
  const [cart, setCart] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState("");
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const fetchData = () => {
    axios
      .get(BACKEND_URL)
      .then((res) => {
        setProducts(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.product.id == product.id);
    console.log(index);
    if (index == -1) {
      setCart((prev) => [...prev, { product: product, quantity: 1 }]);
    } else {
      const curquantity = cart[index].quantity;
      setCart(
        cart.map((item) =>
          item.product.id == product.id
            ? { ...item, quantity: curquantity + 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((item) => item.product.id == product.id);
    const curquantity = cart[index].quantity;
    setCart(
      cart.map((item) =>
        item.product.id == product.id
          ? { ...item, quantity: curquantity - 1 }
          : item
      )
    );
    if (curquantity - 1 == 0) {
      setCart(cart.filter((item) => item.product.id != product.id));
    }
  };

  const makeNotficationVisible = (text) => {
    console.log("Called makeNotification Visible Function");
    setIsVisible((prev) => true);
    setNotification((prev) => text);
    setTimeout(() => {
      setIsVisible((prev) => false);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [isLoaded]);

  return (
    isLoaded && (
      <BrowserRouter>
        <ProductContext.Provider
          value={{
            products,
            setProducts,
            cart,
            setCart,
            searchText,
            setSearchText,
            addToCart,
            removeFromCart,
            makeNotficationVisible,
            notification,
            isVisible,
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              {console.log("Is Visible value ", isVisible)}
              <Route index element={<Home />} />
              <Route path="products/:id" element={<SingleProduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="addproduct" element={<AddProduct />} />
            </Route>
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    )
  );
}

export default App;
