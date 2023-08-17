import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: "About Me",
    image: "/img/DinganWang.jpg",
    description: <>Welcome to my Internet home.</>,
    path: "/about_me",
  },
  {
    title: "Docs",
    image: "/img/book.svg",
    description: <>Structured notes for specific topics, similar to a book.</>,
    path: "/docs"
  },
  {
    title: "Blogs",
    image: "/img/blog.svg",
    description: <>Random topics from daily study, work and life.</>,
    path: "/blog"
  },
];

function Feature({ image, title, description, path}) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Link
          className="bg-green-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          to={path}>
          {title}
        </Link>
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
