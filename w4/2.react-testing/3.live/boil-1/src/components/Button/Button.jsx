import React from "react";
import Styles from "./Button.module.css"

const Button = ({label,onClick}) => {
  return <div className={Styles.Button} data-testid="Button" onClick={onClick}>{label}</div>;
};

export default Button;
