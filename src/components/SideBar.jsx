import React from "react";

const SideBar = () => {
    
  return (
    <div className="sidebar">
      <span className="sidebar__heading">Filters</span>
      // price range min and max - slider // rating // category
      <input
        name="price-range"
        type="range"
      ></input>
    </div>
  );
};

export default SideBar;
