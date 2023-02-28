import React from "react";
import "./Button.scss";

const Button = ({ text, onclickfunc }) => {
  return (
    <button
      className="button"
      onClick={() => {
        console.log("Button clicked");
        onclickfunc();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
