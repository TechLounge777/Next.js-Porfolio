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

const RecentPostsSection = ({ posts }) => {
  return (
    <>
      <RecentPostsSectionWrapper>
        <RecentPostsHeaderWrapper>
          <RecentPostsSectionTitle>Recent Posts</RecentPostsSectionTitle>
          <ViewAllLink href="/blog">View all</ViewAllLink>
        </RecentPostsHeaderWrapper>
        <LeftPost>
          <PostTitle>Making a design system from scratch</PostTitle>
          <PostData>12 Feb 2020 | Design, Pattern</PostData>
          {posts.slice(0, 1).map((post) => (
            <PostContent key={post.id}>{post.body}</PostContent>
          ))}
        </LeftPost>

        <RightPost>
          <PostTitle>Making a design system from scratch</PostTitle>
          <PostData>12 Feb 2020 | Figma, Icon Design</PostData>
          <PostContent>
            {posts.slice(1, 2).map((post) => (
              <PostContent key={post.id}>{post.body}</PostContent>
            ))}
          </PostContent>
        </RightPost>
      </RecentPostsSectionWrapper>
    </>
  );
};

export default RecentPostsSection;
