import React, { Fragment, Component } from "react";

import Logo from "../Logo/logo";
import classes from "./Header.module.css";
import Button from "../Button/Button";

import usBanner from "../../assests/images/us-banner.png";
import icon from "../../assests/images/icon.png";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className={classes.hero}>
          <nav className={classes.navbar}>

            <Logo />
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
                <a href="contact.html">SIGN UP</a>
              </li>
            </ul>
            <div className={classes.login}>
              <img src={usBanner} alt="usBanner" />
              <p>EN</p>
              <img className={classes.icon} src={icon} alt="icon" />
              <button className={classes.button}>Login</button>
            </div>
            {/* </div> */}
          </nav>
          {/* <div id ="showcase"> */}
          {/* <div className={classes.container}> */}
          <div className={classes.content}>
            <h1>CloudBudget</h1>
            <p class="lead">
              Cloud budget management for everyone. Only €69.95 a Month After a
              7 Day Trial of Up to €4.99
            </p>
            <Button/>
            {/* </div> */}
            {/* </div> */}
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
