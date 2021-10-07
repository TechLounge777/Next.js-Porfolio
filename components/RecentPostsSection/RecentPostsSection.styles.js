import styled from "styled-components";

export const RecentPostsSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #edf7fa;
`;

export const RecentPostsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 7px;
`;

export const RecentPostsSectionTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: #21243d;
  font-size: 22px;
  line-height: 60px;
`;
export const ViewAllLink = styled.a`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  line-height: 23px;
  color: #00a8cc;
`;

export const LeftPost = styled.div`
  background: #fff;
  width: 45%;
  margin-bottom: 32px;
`;

export const PostTitle = styled.h1`
  color: #21243d;
  font-size: 26px;
  line-height: 38px;
`;

export const PostDate = styled.h2`
  color: #21243d;
`;

export const PostInfo = styled.h2`
  color: #21243d;
`;

export const PostContent = styled.p`
  color: #21243d;
`;

export const RightPost = styled.div`
  background: #ffffff;
  color: #21243d;
  width: 45%;
  margin-bottom: 32px;
`;
