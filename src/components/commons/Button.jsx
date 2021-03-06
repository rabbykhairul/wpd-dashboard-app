import React from "react";

const Button = (props) => {
  const { type = "button", className = "", onClick = () => {}, disabled = false, children } = props;

  return (
    <button className={`bg-teal color-white ${className}`} type={type} onClick={onClick} disabled={disabled}>{children}</button>
  );
}

export default Button;