import React from "react";

import classes from "./features.module.css";



const features = (props) => (
  <div className={classes.image}>
      <img src={props.img} alt='feature' className={classes.featureImage}/>
    <div className={classes.content}>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <a href="/">Read More</a>
    </div>
  </div>
);
export default features;
