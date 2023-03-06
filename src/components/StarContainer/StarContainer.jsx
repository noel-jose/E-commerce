import React from "react";
import "./StarContainer.scss";

const StarContainer = ({ rating }) => {
  const newrating = Math.floor(rating);
  const star = [
    <i className="fa-solid fa-star" key="star1"></i>,
    <i className="fa-solid fa-star" key="star2"></i>,
    <i className="fa-solid fa-star" key="star3"></i>,
    <i className="fa-solid fa-star" key="star4"></i>,
    <i className="fa-solid fa-star" key="star5"></i>,
  ];

  return <div className="starcontainer">{star.slice(0, rating)}</div>;
};

export default React.memo(StarContainer);
