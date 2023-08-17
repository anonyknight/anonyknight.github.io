import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Hello World",
    image: "/img/DinganWang.jpg",
    description: <>Welcome to my Internet home.</>,
  },
  {
    title: "Notes",
    image: "/img/book.svg",
    description: <>Structured notes for specific topics</>,
  },
  {
    title: "Blogs",
    image: "/img/blog.svg",
    description: <>Random topics from daily study, work and life.</>,
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
