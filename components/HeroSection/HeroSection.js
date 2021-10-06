import React from "react";
import Image from "next/image";
import {
  LeftSection,
  HeroSectionWrapper,
  RightSection,
  ImageWrapper,
  StyledImage,
} from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <LeftSection>
        <h1> Hi, I am John, Creative Technologist</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button>Download Resume</button>
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
