import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection/HeroSection";
import RecentPostsSection from "../components/RecentPostsSection/RecentPostsSection";
import Featured from "../components/Featured/Featured";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Portfolio | Home</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <RecentPostsSection />
        <Featured />
      </main>
    </div>
  );
}
