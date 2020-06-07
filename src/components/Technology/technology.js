import React from "react";

import Details from "../Details/details";
import classes from "./technology.module.css";

import icon1 from "../../assests/images/icon1.png";
import icon2 from "../../assests/images/icon2.png";
import icon3 from "../../assests/images/icon4.png";
import icon4 from "../../assests/images/icon3.png";

const technology = props => {
  let data = [
    {
      id: "1",
      number: "01",
      icon: icon1,
      title: "Cloud Storage",
      content: "Access your account from anywhere in the world on any device"
    },
    {
      id: "1",
      number: "02",
      icon: icon2,
      title: "Secure",
      content: "All your information is stored on secure cloud servers"
    },
    {
      id: "3",
      number: "03",
      icon: icon3,
      title: "PDF Download",
      content: "Download any of your reports in PDF format"
    },
    {
      id: "4",
      number: "04",
      icon: icon4,
      title: "CSV Download",
      content: "All your information is stored on secure cloud servers"
    }
  ];

  return (
    <section className={classes.sectionPadding}>
      <header className={classes.sectionHeader}>
        <h4>Technology</h4>
      </header>
      <div className={classes.flexItems}>
        {data.map(detail => (
          <div>
            <Details
              number={detail.number}
              icon={detail.icon}
              title={detail.title}
              content={detail.content}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default technology;
