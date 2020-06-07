import React from "react";

import classes from "./AboutUs.module.css";

import aboutus from '../../assests/images/aboutus.png'

const aboutUs = () => (
    <section  className={classes.flexColumns}>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.column1}>
            <img src={aboutus} alt="about us picture" />
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.column2}>
            <h2>Easy to Use Cloud Budget Management Software</h2>
            <p>
            Our software is made so you can access and 
            manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns 
            and budget at a glance. Read below to find out more.
            </p>
            <a href="/">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
);
export default aboutUs;
