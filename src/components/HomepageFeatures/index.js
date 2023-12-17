import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import BookSVG from "@site/static/img/book.svg";
import BlogSVG from "@site/static/img/blog.svg";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const FeatureList = [
  {
    title: "Techs",
    image: <BookSVG />,
    description: <>Structured notes for software engineering career.</>,
    path: "/docs/techs",
  },
  {
    title: "Readings",
    image: <BookSVG />,
    description: <>Structured notes for life-long learning.</>,
    path: "/docs/readings",
  },
  {
    title: "Blogs",
    image: <BlogSVG />,
    description: <>Random topics from daily study, work and life.</>,
    path: "/blog",
  },
//   {
//     title: "About Me",
//     image: (
//       <img
//         src={require("@site/static/img/DinganWang.jpg").default}
//         className={styles.featureImg}
//       />
//     ),
//     description: <>Welcome to my Internet home.</>,
//     path: "/about_me",
//   },
];

function Feature({ image, title, description, path }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{image}</div>
      <div className="text--center">
        <Link
          className="rounded-lg"
          to={path}
        >
          <h1>{title}</h1>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures() {
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

export function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}
