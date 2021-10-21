import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

export const Form = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  font-size: 22px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
`;

export const LabelBox = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const Label = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  margin-top: 1.5rem;
`;

export const InputBox = styled.div`
  margin-left: 5px;
`;

export const TextBox = styled.div`
  display: flex;
  margin-left: 5px;
  height: 120px;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 13px 40px 13px 40px;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  background: #ff6464;
  color: #fff;
  border-radius: 2px;
  margin-top: 45px;
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
