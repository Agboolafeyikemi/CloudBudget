import React from "react";

import Button from "../Button/Button";
import classes from "./contact.module.css";

const contact = () => (
  <section className={classes.flexColumns}>
    <div className={classes.flexColumn}>
    <div className={classes.row}>
      <div className={classes.column}>
        <div className={classes.column1}>
          <h2>Contact</h2>
          <p>
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </p>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.column2}>
          <form action="" className={classes.callbackForm}>
            <div className={classes.formControl}>
              <label for="firstName"></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                className={classes.firstChild}
              />
              <label for="lastName"></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
              />
            </div>
            <div className={classes.formControl}>
              <label for="phone"></label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className={classes.formControl}>
              <select name="services">
                <option value=" Service1">Select Service</option>
                <option value="Service2">1</option>
                <option value="Service2">2</option>
              </select>
            </div>
            <Button btnType={'Contact'}>SUBMIT NOW</Button>
          </form>
        </div>
      </div>
    </div>
    </div>
  </section>
);
export default contact;
