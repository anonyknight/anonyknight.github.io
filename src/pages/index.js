import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  HomepageFeatures,
  HomepageHeader,
} from "@site/src/components/HomepageFeatures";

import CareerJourney from "@site/src/components/mdx/CareerJourney.mdx";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div className="flex flex-col items-center  mt-8">
        <CareerJourney />
      </div>
    </Layout>
  );
}
