import React from "react";
import Head from "next/head";
import BlogPage from "../components/SubPages/BlogPage/BlogPage";

<Head>
  <title>Next.js Portfolio | Blog</title>
  <meta name="description" content="Portfolio" />
  <link rel="icon" href="/favicon.ico" />
</Head>;

const Blog = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default Blog;
