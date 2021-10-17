import React from "react";
import ContactForm from "../../ContactForm/ContactForm";
import {
  ContactPageWrapper,
  ContactHeader,
  ContactTitle,
  ContactData,
  ContactMobile,
  ContactEmail,
  ContactSocials,
  ContactText,
  ContactLineBreak,
} from "./ContactPage.styles";

const ContactPage = () => {
  return (
    <div>
      <ContactPageWrapper>
        <ContactHeader>Contact</ContactHeader>
        <ContactTitle>Let's get in touch</ContactTitle>
        <ContactData>
          <ContactMobile>mobile: +36 858515757</ContactMobile>
          <ContactEmail>email: John123@gmail.com</ContactEmail>
          <ContactSocials>
            <a href="https://www.linkedin.com/">Linkedin</a>
            <a href="https://github.com/vercel/next.js/">Github</a>
          </ContactSocials>
        </ContactData>
        <ContactText>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </ContactText>
        <ContactLineBreak />
        <ContactForm />
      </ContactPageWrapper>
    </div>
  );
};

export default ContactPage;
