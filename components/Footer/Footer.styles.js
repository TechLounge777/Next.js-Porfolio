import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 482px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 35px;
  margin-top: 51px;
  margin-bottom: 33px;
  color: #21243d;
  li:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const Copyright = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 54px;
  color: #21243d;
  font-size: 14px;
  line-height: 20px;
`;
