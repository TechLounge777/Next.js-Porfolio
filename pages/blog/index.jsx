import React from "react";
import Head from "next/head";
import BlogPage from "../../components/SubPages/BlogPage/BlogPage";

<Head>
  <title>Next.js Portfolio | Blog</title>
  <meta name="description" content="Portfolio" />
  <link rel="icon" href="/favicon.ico" />
</Head>;

const Blog = ({ posts }) => {
  return (
    <div>
      <BlogPage posts={posts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default Blog;
