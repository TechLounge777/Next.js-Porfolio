import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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
    color: aqua;
    cursor: pointer;
  }
`;
