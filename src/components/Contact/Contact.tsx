import React, { FC } from "react"

import {
  Form,
  Input,
  InputMsg,
  EmailSmHeader,
  EmailExSmHeader,
  P,
  SubmitButton,
  ContactSection,
  EmailSection,
  EmailDiv,
  EmailButton,
  PHidden,
} from "./style"

import { CommonTitle } from "../../css/styledCommon"

const Contact: FC = (): JSX.Element => {
  return (
    <ContactSection>
      <CommonTitle>Let's get in touch.</CommonTitle>
      <EmailSection>
        <EmailDiv>
          <EmailSmHeader>Contact me by email:</EmailSmHeader>
          <form action="mailto:mail@danielmcdermott.me">
            <EmailButton type="submit">mail@danielmcdermott.me</EmailButton>
          </form>
        </EmailDiv>
      </EmailSection>

      <Form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <EmailSmHeader>No time for email? </EmailSmHeader>
        <EmailExSmHeader>Fill in the easy contact form below:</EmailExSmHeader>
        <input type="hidden" name="form-name" value="contact" />
        <PHidden>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </PHidden>
        <P>
          <label>
            Your Name: <Input type="text" name="name" />
          </label>
        </P>
        <P>
          <label>
            Your Email: <Input type="email" name="email" />
          </label>
        </P>
        <P>
          <label>
            Message: <InputMsg name="message"></InputMsg>
          </label>
        </P>
        <P>
          <SubmitButton type="submit">Send</SubmitButton>
        </P>
      </Form>
    </ContactSection>
  )
}

export default Contact
