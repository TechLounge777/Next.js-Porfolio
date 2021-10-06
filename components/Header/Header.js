import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderWrapper, Nav, LogoWrapper, StyledLink } from "./Header.styles";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <StyledLink href="/">
            <Image
              src="/public/logoipsum.svg"
              width="132px"
              height="35px"
              alt="logo"
            />
          </StyledLink>
        </LogoWrapper>
        <Nav>
          <StyledLink href="/works">Works</StyledLink>
          <StyledLink href="/blog">Blog</StyledLink>
          <StyledLink href="/contact">Contact</StyledLink>
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
