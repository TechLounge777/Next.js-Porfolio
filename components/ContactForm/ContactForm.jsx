import React from "react";
import {
  FormWrapper,
  Form,
  FormGroup,
  Label,
  InputField,
} from "./ContactForm.styles";

const ContactForm = () => {
  return (
    <FormWrapper>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <InputField type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <InputField type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <InputField type="text" name="message" />
        </FormGroup>
        <InputField type="submit" />
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
