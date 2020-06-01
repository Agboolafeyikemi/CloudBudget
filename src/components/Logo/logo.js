import React from "react";
import Logo from "../../assests/images/logo.png";
import classes from "./logo.module.css";

const logo = () => (
  <div className={classes.logo}>
    <span>
      <img src={Logo} alt="myLogo" />

      <a href="/">CloudBudget</a>
    </span>
  </div>
);
export default logo;
