import React from "react";
import {
  FormWrapper,
  Form,
  LabelBox,
  InputBox,
  TextBox,
  Label,
  SubmitButtonWrapper,
  SubmitButton,
} from "./ContactForm.styles";

const ContactForm = () => {
  return (
    <FormWrapper>
      <Form name="contact" method="POST" data-netlify="true">
        <LabelBox>
          <Label htmlFor="name">
            Your Name:
            <InputBox>
              <input type="text" name="name" />
            </InputBox>
          </Label>
        </LabelBox>
        <LabelBox>
          <Label htmlFor="email">
            Your Email:
            <InputBox>
              {" "}
              <input tyLabelBoxe="email" name="email" />
            </InputBox>
          </Label>
        </LabelBox>

        <LabelBox>
          <Label htmlFor="message">
            Message:
            <TextBox>
              {" "}
              <textarea name="message"></textarea>
            </TextBox>
          </Label>
        </LabelBox>
        <SubmitButtonWrapper>
          <SubmitButton type="submit">Send</SubmitButton>
        </SubmitButtonWrapper>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
