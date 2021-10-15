import React from "react";
import Image from "next/image";
import {
  FeaturedWorksSectionWrapper,
  FeaturedWorksHeader,
  FeaturedWorksList,
  FeaturedWork,
  FeaturedWorkImage,
  WorkInfo,
  WorkTitle,
  WorkData,
  StyledButton,
  WorkDescription,
  LineBreak,
} from "./Featured.styles";

const Featured = () => {
  return (
    <FeaturedWorksSectionWrapper>
      <FeaturedWorksList>
        <FeaturedWorksHeader>Featured works</FeaturedWorksHeader>
        <FeaturedWork>
          <FeaturedWorkImage
            src="/work1.svg"
            width={246}
            height={180}
            alt="featured work"
          />
          <WorkInfo>
            <WorkTitle>Designing Dashboards</WorkTitle>
            <WorkData>
              <StyledButton href="#">2021</StyledButton> Dashboard
            </WorkData>
            <WorkDescription>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </WorkDescription>
          </WorkInfo>
        </FeaturedWork>
        <LineBreak />
        <FeaturedWork>
          <FeaturedWorkImage
            src="/work2.svg"
            width={246}
            height={180}
            alt="featured work"
          />
          <WorkInfo>
            <WorkTitle>Vibrant portraits of 2020</WorkTitle>
            <WorkData>
              <StyledButton href="#">2020</StyledButton> Illustration
            </WorkData>
            <WorkDescription>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </WorkDescription>
          </WorkInfo>
        </FeaturedWork>
        <LineBreak />
        <FeaturedWork>
          <FeaturedWorkImage
            src="/work3.svg"
            width={246}
            height={180}
            alt="featured work"
          />
          <WorkInfo>
            <WorkTitle>36 Days of Malayalam People</WorkTitle>
            <WorkData>
              <StyledButton href="#">2018</StyledButton> Typography
            </WorkData>
            <WorkDescription>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </WorkDescription>
          </WorkInfo>
        </FeaturedWork>
        <LineBreak />
      </FeaturedWorksList>
    </FeaturedWorksSectionWrapper>
  );
};

export default Featured;
