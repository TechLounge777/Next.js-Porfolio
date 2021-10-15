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
              src="/logoipsum.svg"
              width="132px"
              height="35px"
              alt="logo"
            />
          </StyledLink>
        </LogoWrapper>
        <Nav>
          <li>
            <StyledLink href="/works">
              <a>Works</a>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/blog">
              <a>Blog</a>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">
              <a>Contact</a>
            </StyledLink>
          </li>
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
