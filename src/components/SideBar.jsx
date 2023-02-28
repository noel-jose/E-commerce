import React from "react";
import "./SideBar.scss";

const SideBar = ({ setCategory, setMaxPrice, setRating, setFilter }) => {
  return (
    <div className="sidebar">
      <span className="sidebar__heading_main">Filters</span>
      {/* based on price  */}
      <div className="flex">
        <label htmlFor="name" className="sidebar__heading">
          Max Price
        </label>
        <input
          name="price-range"
          type="range"
          min="0"
          max="1000"
          onChange={(e) => setMaxPrice(e.target.value)}
        ></input>
      </div>
      {/* based on category  */}
      <div>
        <label htmlFor="category" className="sidebar__heading">
          Categories
        </label>
        <div className="flex" onChange={(e) => setCategory(e.target.value)}>
          <div>
            <input
              type="radio"
              value="all"
              name="category"
              defaultChecked={true}
            />{" "}
            All
          </div>
          <div>
            <input type="radio" value="men's clothing" name="category" /> Men's
            Clothing
          </div>
          <div>
            <input type="radio" value="women's clothing" name="category" />{" "}
            Women's Clothing
          </div>
          <div>
            <input type="radio" value="electronics" name="category" />{" "}
            Electronics
          </div>
          <div>
            <input type="radio" value="jewelery" name="category" /> Jewelery
          </div>
        </div>
      </div>
      {/* based on ratings  */}
      <div>
        <label htmlFor="rating" className="sidebar__heading">
          Ratings
        </label>
        <div className="flex" onChange={(e) => setRating(e.target.value)}>
          <div>
            <input type="radio" value="" name="rating" defaultChecked={true} />{" "}
            All
          </div>
          <div>
            <input type="radio" value="4" name="rating" /> Above 4
          </div>
          <div>
            <input type="radio" value="3" name="rating" /> Above 3
          </div>
          <div>
            <input type="radio" value="2" name="rating" /> Above 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
