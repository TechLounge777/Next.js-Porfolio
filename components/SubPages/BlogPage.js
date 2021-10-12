import React from "react";
import {
  BlogPageWrapper,
  PostsList,
  BlogHeader,
  BlogPost,
  PostTitle,
  PostData,
  PostDate,
  Break,
  PostCategory,
  PostText,
  PostLineBreak,
} from "./BlogPage.styles";

const BlogPage = () => {
  return (
    <div>
      <BlogPageWrapper>
        <PostsList>
          <BlogHeader>Blog</BlogHeader>
          <BlogPost>
            <PostTitle>UI Interactions of the week</PostTitle>
            <PostData>
              <PostDate>12 Feb 2019</PostDate>
              <Break>|</Break>
              <PostCategory>Express,Handlebars</PostCategory>
            </PostData>
            <PostText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </PostText>
          </BlogPost>
          <PostLineBreak />

          <BlogPost>
            <PostTitle>UI Interactions of the week</PostTitle>
            <PostData>
              <PostDate>12 Feb 2019</PostDate>
              <Break>|</Break>
              <PostCategory>Express,Handlebars</PostCategory>
            </PostData>
            <PostText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </PostText>
          </BlogPost>
          <PostLineBreak />
          <BlogPost>
            <PostTitle>UI Interactions of the week</PostTitle>
            <PostData>
              <PostDate>12 Feb 2019</PostDate>
              <Break>|</Break>
              <PostCategory>Express,Handlebars</PostCategory>
            </PostData>
            <PostText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </PostText>
          </BlogPost>
          <PostLineBreak />
          <BlogPost>
            <PostTitle>UI Interactions of the week</PostTitle>
            <PostData>
              <PostDate>12 Feb 2019</PostDate>
              <Break>|</Break>
              <PostCategory>Express,Handlebars</PostCategory>
            </PostData>
            <PostText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </PostText>
          </BlogPost>
          <PostLineBreak />
        </PostsList>
      </BlogPageWrapper>
    </div>
  );
};

export default BlogPage;
