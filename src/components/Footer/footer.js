import React, { Fragment } from "react";

import classes from "./footer.module.css";

import socialIcons from '../../assests/images/Social.png';
import secureIcons from '../../assests/images/secure-p-1 1.png'

const footer = props => (
  <Fragment>
    <section className={classes.footer}>
        <div className={classes.footerDetails}>
        <div className={classes.footerDetail}>
      <div className={classes.Address}>
        <h4>Address</h4>
        <p>
          Pipang Ltd, Griva Digeni, 81-83 Jacovides Tower, 1st Floor 1090
          Picosia USA
        </p>
      </div>
      <div className={classes.Services}>
        <h4>Services</h4>
        <ul>
          <li>overview</li>
          <li>features</li>
          <li>technology</li>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className={classes.GetinTouch}>
        <h4>Get in Touch</h4>
        <ul>
          <li>info@cloudbudget.com</li>
          <li>+1 844-721-7120</li>
          <li>
            <img src={socialIcons} alt={"Social icons"} />
          </li>
        </ul>
      </div>
      <div className={classes.Support}>
        <h4>We Support</h4>
        <ul>
          <li>
            <img src={secureIcons} alt={"Social icons"} />
          </li>
        </ul>
      </div>
      </div>
      <div className={classes.copyright}>
      <p>Copyright 2018 CloudBudget</p>
    </div>
    </div>
    </section>
  
  </Fragment>
);
export default footer;
