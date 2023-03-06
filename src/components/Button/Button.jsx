import React from "react";
import "./Button.scss";

const Button = ({ text, onclickfunc }) => {
  return (
    <button
      className="button"
      onClick={() => {
        onclickfunc();
      }}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
