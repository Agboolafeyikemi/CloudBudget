import React from "react";

import Features from "../Features/features";
import classes from "./feature.module.css";

import image1 from "../../assests/images/feature.png";
import image2 from "../../assests/images/feature2.png";
import image3 from "../../assests/images/feature3.png";

const feature = props => {
  let data = [
    {
      id: "1",
      title: "Supports All Currencies and Cards",
      image: image3,
      content:"We support all popular currencies and is fully customizable to add",
      link: "Read More"
    },
    {
      id: "2",
      title: "Manage your expenses on the go",
      image: image2,
      content:
        "You can access your account from anywhere in the world on any device",
      link: "Read More"
    },
    {
      id: "3",
      title: "Cloud Budget Management Software",
      image: image1,
      content:"Our software is made so you can access and manage your budget",
      link: "Read More"
    }
  ];

  return (
    <section className={classes.sectionPadding}>
      <header className={classes.sectionHeader}>
        <h4>Features</h4>
      </header>
      <div className={classes.flexItems}>
      {data.map((feature) => (
        <div >
           <Features 
           img={feature.image}
           title={feature.title}
           content={feature.content}
           />
        </div>
      ))}
    </div>
    </section>
  )
}

export default feature;