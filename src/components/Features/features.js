import React from "react";
import classes from "./features.module.css";



const features = (props) => (
  <div className={classes.image}>
    <div>
      <img src={props.img} alt='feature'/>
    </div>
    <div className={classes.content}>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <a href="/">Read More</a>
    </div>
  </div>
);
export default features;
