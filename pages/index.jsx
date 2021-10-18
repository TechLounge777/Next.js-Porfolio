import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "../components/HeroSection/HeroSection";
import RecentPostsSection from "../components/RecentPostsSection/RecentPostsSection";
import Featured from "../components/Featured/Featured";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js Portfolio | Home</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <RecentPostsSection posts={posts} />
        <Featured />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
