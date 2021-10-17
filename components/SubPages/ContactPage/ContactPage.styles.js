import styled from "styled-components";

export const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 200px;
`;

export const ContactHeader = styled.h1`
  color: #21243d;
  font-size: 26px;
  line-height: 38px;
  margin-bottom: 2px;
  margin-top: 10px;
`;

export const ContactTitle = styled.h2`
  font-size: 20px;
  line-height: 26px;
  color: #21243d;
  margin-top: 60px;
`;

export const ContactData = styled.h3`
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
  margin-top: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContactMobile = styled.h3`
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
  text-align: center;
`;

export const ContactEmail = styled.h3`
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
  text-align: center;
`;

export const ContactSocials = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
  text-align: center;
`;

export const ContactText = styled.p`
  max-width: 850px;
  color: #21243d;
  font-size: 16px;
  line-height: 23px;
  margin-top: 40px;
  margin-bottom: 7px;
  text-align: center;
`;

export const ContactLineBreak = styled.hr`
  margin-top: 15px;
  margin-bottom: 31px;
  border: 1px solid #e0e0e0;
`;
