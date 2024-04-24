import React from "react";
import "../Styles/Components/Button.scss";

const Button = (props) => {
  const { title, handleClick, active } = props;
  return (
    // <div>
    <span>
      <button
        className={`customButton ${active && "activeCustomButton"}`}
        onClick={() => handleClick()}
      >
        {title}
      </button>
    </span>
  );
};

export { Button };
