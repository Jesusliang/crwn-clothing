import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, styleType, ...otherProps }) => {
  return (
    <button
      className={`${styleType ? styleType : ""} custom-button
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
