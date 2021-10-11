import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 148px;
  padding-right: 148px;
  margin-bottom: 595px; //
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 140px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled.a`
  display: flex;
  margin-top: 27px;
  margin-left: 33px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
