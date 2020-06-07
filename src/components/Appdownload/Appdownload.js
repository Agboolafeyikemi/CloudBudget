import React from "react";

import classes from "./Appdownload.module.css";

import overlayimage from "../../assests/images/Slider.png";
import appStore1 from "../../assests/images/appstore(2).png";
import appStore2 from "../../assests/images/appstore(1).png";
import appStore3 from "../../assests/images/windows.png";

const appDownload = () => (
  <section className={classes.flexColumns}>
    <div className={classes.flexColumn}>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.column1}>
            <h2>Stay focused on saving money</h2>
            <p>
              It is important to stay focused on saving money in any way you
              can. We help you monitor your spending habits so you can easily
              spot and cut any unnecessary expenses. Simply join today to get
              started!
            </p>
            <div className={classes.icons}>
              <img src={appStore1} alt="icons" />
              <img src={appStore2} alt="icons" />
              <img src={appStore3} alt="icons" />
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.column2}>
            <div className={classes.image}>
              <img src={overlayimage} alt="App-download-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default appDownload;
