import React from "react";
import Link from "next/link";
import {
  RecentPostsSectionWrapper,
  RecentPostsHeaderWrapper,
  RecentPostsSectionTitle,
  ViewAllLink,
  LeftPost,
  PostTitle,
  PostDate,
  PostInfo,
  PostContent,
  RightPost,
} from "./RecentPostsSection.styles";

const RecentPostsSection = () => {
  return (
    <div>
      <RecentPostsSectionWrapper>
        <RecentPostsHeaderWrapper>
          <RecentPostsSectionTitle>Recent Posts</RecentPostsSectionTitle>
          <ViewAllLink href="/blog">View all</ViewAllLink>
        </RecentPostsHeaderWrapper>
        <LeftPost>
          <PostTitle>Making a design system from scratch</PostTitle>
          <PostDate>12 Feb 2020 | </PostDate>
          <PostInfo>Design, Pattern</PostInfo>
          <PostContent>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </PostContent>
        </LeftPost>

        <RightPost>
          <PostTitle>Making a design system from scratch</PostTitle>
          <PostDate>12 Feb 2020 | </PostDate>
          <PostInfo>Figma, Icon Design</PostInfo>
          <PostContent>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </PostContent>
        </RightPost>
      </RecentPostsSectionWrapper>
    </div>
  );
};

export default RecentPostsSection;
