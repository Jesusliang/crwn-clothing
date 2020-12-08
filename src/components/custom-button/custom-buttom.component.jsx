import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, style, ...otherProps }) => {
  return (
    <button className={`${style ? style : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
