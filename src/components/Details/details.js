import React, { Fragment } from "react";

import classes from "./details.module.css";

const features = props => (
  <Fragment>
    <div className={classes.technology}>
      <div className={classes.image}>
        <h3>{props.number}</h3>
        <div className={classes.icons}>
          <img src={props.icon} alt="feature" />
        </div>
      </div>
      <div className={classes.details}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  </Fragment>
);
export default features;
