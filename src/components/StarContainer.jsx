import React from "react";
import "./StarContainer.scss";

const StarContainer = ({ rating }) => {
  const newrating = Math.floor(rating);
  const star = [
    <i className="fa-solid fa-star"></i>,
    <i className="fa-solid fa-star"></i>,
    <i className="fa-solid fa-star"></i>,
    <i className="fa-solid fa-star"></i>,
    <i className="fa-solid fa-star"></i>,
  ];

  return <div className="starcontainer">{star.slice(0, rating)}</div>;
};

export default React.memo(StarContainer);
