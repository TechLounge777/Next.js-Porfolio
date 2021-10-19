import React from "react";
import Link from "next/dist/client/link";
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

const BlogPage = ({ posts }) => {
  return (
    <div>
      <BlogPageWrapper>
        <PostsList>
          <BlogHeader>Blog</BlogHeader>
          {posts.slice(0, 5).map((post) => (
            <>
              <BlogPost>
                <PostTitle>
                  <Link href={`/posts/${post.id}`} key={post.id}>
                    {post.title}
                  </Link>
                </PostTitle>
                <PostData>
                  <PostDate>12 Feb 2019</PostDate>
                  <Break>|</Break>
                  <PostCategory>Express,Handlebars</PostCategory>
                </PostData>
                <PostText>{post.body}</PostText>
              </BlogPost>
              <PostLineBreak />
            </>
          ))}
        </PostsList>
      </BlogPageWrapper>
    </div>
  );
};

export default BlogPage;
