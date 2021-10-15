import React from "react";
import Head from "next/head";
import WorksPage from "../components/SubPages/WorksPage/WorksPage";

<Head>
  <title>Next.js Portfolio | Works</title>
  <meta name="description" content="Portfolio" />
  <link rel="icon" href="/favicon.ico" />
</Head>;

const Works = () => {
  return (
    <div>
      <WorksPage />
    </div>
  );
};

export default Works;
