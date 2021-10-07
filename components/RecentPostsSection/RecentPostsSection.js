import React from "react";
import Link from "next/link";
import {
  RecentPostsSectionWrapper,
  RecentPostsHeaderWrapper,
  RecentPostsSectionTitle,
  ViewAllLink,
  LeftPost,
  PostTitle,
  PostData,
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
          <PostData>12 Feb 2020 | Design, Pattern</PostData>
          <PostContent>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </PostContent>
        </LeftPost>

        <RightPost>
          <PostTitle>Making a design system from scratch</PostTitle>
          <PostData>12 Feb 2020 | Figma, Icon Design</PostData>
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
