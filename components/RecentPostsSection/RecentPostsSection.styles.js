import styled from "styled-components";

export const RecentPostsSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 148px;
  background: #edf7fa;
  width: 100vw;
`;

export const RecentPostsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: 7px;
`;

export const RecentPostsSectionTitle = styled.h1`
  display: flex;

  color: #21243d;
  font-size: 22px;
  line-height: 60px;
`;
export const ViewAllLink = styled.a`
  display: flex;

  font-size: 16px;
  line-height: 23px;
  color: #00a8cc;
`;

export const LeftPost = styled.div`
  max-width: 418px;
  background: #fff;
  // width: 45%;
  margin-bottom: 32px;
  border-radius: 4px;
  padding: 24px 21px 7px 23px;
`;

export const PostTitle = styled.h1`
  color: #21243d;
  font-size: 26px;
  line-height: 38px;
  margin-bottom: 17px;
`;

export const PostData = styled.h2`
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
`;

export const PostContent = styled.p`
  color: #21243d;
  font-size: 16px;
  line-height: 23px;
  margin-top: 11px;
  margin-bottom: 7px;
`;

export const RightPost = styled.div`
  max-width: 418px;
  background: #ffffff;
  color: #21243d;
  // width: 45%;
  margin-bottom: 32px;
  border-radius: 4px;
  padding: 24px 21px 7px 23px;
`;
