import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { HeaderWrapper, Nav, LogoWrapper, StyledLink } from "./Header.styles";

const Header = () => {
  const router = useRouter();
  const [pathName, setPathName] = useState(router.pathname);

  const newPathName = () => {
    setPathName(router.pathname);
  };

  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <StyledLink href="/" passHref>
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
            <StyledLink href="/works" onClick={newPathName} pathname={pathName}>
              Works
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/blog" onClick={newPathName} pathname={pathName}>
              Blog
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/contact"
              onClick={newPathName}
              pathname={pathName}
            >
              Contact
            </StyledLink>
          </li>
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
