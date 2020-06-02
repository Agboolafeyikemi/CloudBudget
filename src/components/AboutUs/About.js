import React from "react";
import classes from "./AboutUs.module.css";

import aboutus from '../../assests/images/aboutus.png'

const aboutUs = () => (
  <div className={classes.about}>
    <section  class="blog flex-columns flex-reverse">
      <div class="row">
        <div class="column">
          <div class="column-1">
            <img src={aboutus} alt="about uspicture" />
          </div>
        </div>
        <div class="column">
          <div class="column-2 bg-secondary">
            <h2>Easy to Use Cloud Budget Management Software</h2>
            <p>
            Our software is made so you can access and 
            manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns 
            and budget at a glance. Read below to find out more.
            </p>
            <a href="/" class="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default aboutUs;
