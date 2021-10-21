import React from "react";
import ContactPage from "../components/SubPages/ContactPage/ContactPage";
import Head from "next/head";
import ContactForm from "../components/ContactForm/ContactForm";

<Head>
  <title>Next.js Portfolio | Contact</title>
  <meta name="description" content="Portfolio" />
  <link rel="icon" href="/favicon.ico" />
</Head>;

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;
