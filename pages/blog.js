import React from "react";
import Head from "next/head";
import BlogPage from "../components/SubPages/BlogPage";

<Head>
  <title>Next.js Portfolio | Blog</title>
  <meta name="description" content="Portfolio" />
  <link rel="icon" href="/favicon.ico" />
</Head>;

const blog = () => {
  return (
    <div>
      <BlogPage />;
    </div>
  );
};

export default blog;
