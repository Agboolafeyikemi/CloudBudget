import React, { Fragment, Component } from "react";

import classes from "./Header.module.css";
import Button from "../Button/Button";

import Logo from "../Logo/logo";

import usBanner from "../../assests/images/us-banner.png";
import icon from "../../assests/images/icon.png";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className={classes.hero}>
        <div className={classes.top}>
          <div className={classes.navbar}>
            
              <Logo />
              <nav>
                <ul>
                  <li>
                    <a class="current" href="index.html">
                      OVERVIEW
                    </a>
                  </li>
                  <li>
                    <a href="about.html">FEATURES </a>
                  </li>
                  <li>
                    <a href="contact.html"> TECHNOLOGY </a>
                  </li>
                  <li>
                    <a href="contact.html"> CONTACT</a>
                  </li>
                  <li>
                    <a href="contact.html">SIGNUP</a>
                  </li>
                </ul>
              </nav>
              <div className={classes.login}>
                <img src={usBanner} alt={"us-banner"} className={classes.banner}/>
                <p>EN</p>
                <img src={icon} alt={"icon"} className={classes.icon} />
                <button className={classes.button}>Login</button>
              </div>
            </div>
          </div>
          <div className={classes.content}>
            <h1>CloudBudget</h1>
            <p class="lead">
              Cloud budget management for everyone. Only €69.95 a Month After a
              7 Day Trial of Up to €4.99
            </p>
            <Button btnType={"Header"}>SIGN UP</Button>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
