import React from "react";
import Image from "next/image";
import {
  HeroSectionWrapper,
  LeftSection,
  HeroTitle,
  HeroDescription,
  HeroCtaButton,
  RightSection,
  ImageWrapper,
  StyledImage,
} from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <LeftSection>
        <HeroTitle> Hi, I am John, Creative Technologist</HeroTitle>
        <HeroDescription>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </HeroDescription>
        <HeroCtaButton>Download Resume</HeroCtaButton>
      </LeftSection>
      <RightSection>
        <ImageWrapper>
          <StyledImage src="/ellipse.svg" width={243} height={243} alt="John" />
        </ImageWrapper>
      </RightSection>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
