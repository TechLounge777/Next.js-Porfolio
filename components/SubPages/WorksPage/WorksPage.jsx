import React from "react";
import {
  WorksPageWrapper,
  WorksPageList,
  WorksPageHeader,
  Work,
  WorkImage,
  WorkInfo,
  WorkTitle,
  WorkData,
  StyledButton,
  WorkDescription,
  LineBreak,
} from "./WorksPage.styles";

const WorksPage = () => {
  return (
    <WorksPageWrapper>
      <WorksPageList>
        <WorksPageHeader>Works</WorksPageHeader>
        <Work>
          <WorkImage src="/work1.svg" width={246} height={180} alt=" work" />
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
        </Work>
        <LineBreak />
        <Work>
          <WorkImage src="/work2.svg" width={246} height={180} alt=" work" />
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
        </Work>
        <LineBreak />
        <Work>
          <WorkImage src="/work3.svg" width={246} height={180} alt=" work" />
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
        </Work>
        <LineBreak />

        <Work>
          <WorkImage
            src="/components.svg"
            width={246}
            height={180}
            alt=" work"
          />
          <WorkInfo>
            <WorkTitle>Components</WorkTitle>
            <WorkData>
              <StyledButton href="#">2018</StyledButton> Components, Design
            </WorkData>
            <WorkDescription>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </WorkDescription>
          </WorkInfo>
        </Work>
        <LineBreak />
      </WorksPageList>
    </WorksPageWrapper>
  );
};

export default WorksPage;
