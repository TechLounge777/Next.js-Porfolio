import React from "react";
import Image from "next/image";
import { FooterWrapper, SocialMediaWrapper, Copyright } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialMediaWrapper>
        <li>
          <a>
            <Image src="/fb.svg" width={30} height={30} alt="facebook" />
          </a>
        </li>
        <li>
          <a>
            <Image src="/insta.svg" width={30} height={30} alt="instagram" />
          </a>
        </li>
        <li>
          <a>
            <Image src="/group.svg" width={30} height={30} alt="twitter" />
          </a>
        </li>
        <li>
          <a>
            <Image src="/linkedin.svg" width={30} height={30} alt="linkedin" />
          </a>
        </li>
      </SocialMediaWrapper>
      <Copyright>Copyright @2021 All rights reserved</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
