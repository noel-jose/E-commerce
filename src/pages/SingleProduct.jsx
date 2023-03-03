import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useState, useContext, useEffect } from "react";
import "./SingleProduct.scss";
import StarContainer from "../components/StarContainer";
import { ProductContext } from "../App";
import Cart from "./Cart";
import axios from "axios";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fetchAProduct = (id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/${id}`)
      .then((response) => {
        console.log(`${process.env.REACT_APP_BACKEND_URL}/${id}`);
        console.log(response);
        setProduct(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAProduct(params.id);
  }, []);

  useEffect(() => {
    console.log(product);
    console.log(loaded);
  }, [loaded]);

  const { cart, addToCart, removeFromCart } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(
    cart.has(product.id) ? cart.get(product.id) : 0
  );

  return (
    <div className="singleproduct">
      <img src={product.image} alt="" className="singleproduct__img" />
      <div className="singleproduct__right">
        <div className="singleproduct__main">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {loaded == true && (
            <span>
              <StarContainer rating={product.rating.rate} />(
              {product.rating.count})
            </span>
          )}
        </div>
        <div className="singleproduct__price">${product.price}</div>
        <div className="singleproduct__addtocart">
          <div className="singleproduct__cart">
            <span
              onClick={() =>
                setQuantity((prev) => {
                  if (prev <= 0) return 0;
                  else {
                    removeFromCart(product.id);
                    return prev - 1;
                  }
                })
              }
            >
              <i className="fa-solid fa-minus"></i>
            </span>
            <span className="singleproduct__quantity">{quantity}</span>
            <span
              onClick={() => {
                setQuantity((prev) => prev + 1);
                addToCart(product.id);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <Button
            text="Add to cart"
            onclickfunc={() => {
              addToCart(product.id);
              setQuantity(quantity + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
