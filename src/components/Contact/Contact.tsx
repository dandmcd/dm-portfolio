import React, { FC } from "react"

import {
  Form,
  Input,
  InputMsg,
  EmailSmHeader,
  EmailExSmHeader,
  Paragraph,
  SubmitButton,
  ContactSection,
  EmailSection,
  EmailDiv,
  EmailButton,
  ParagraphHidden,
} from "./style"

import { CommonTitle } from "../../css/styledCommon"
import { Link } from "gatsby"

const Contact: FC = (): JSX.Element => {
  return (
    <ContactSection>
      <CommonTitle>Let's get in touch.</CommonTitle>
      <EmailSection>
        <EmailDiv>
          <EmailSmHeader>Contact me by email:</EmailSmHeader>
          <Link to="mailto:mail@danielmcdermott.me">
            <EmailButton type="">mail@danielmcdermott.me</EmailButton>
          </Link>
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
        <ParagraphHidden>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </ParagraphHidden>
        <Paragraph>
          <label>
            Your Name: <Input type="text" name="name" />
          </label>
        </Paragraph>
        <Paragraph>
          <label>
            Your Email: <Input type="email" name="email" />
          </label>
        </Paragraph>
        <Paragraph>
          <label>
            Message: <InputMsg name="message"></InputMsg>
          </label>
        </Paragraph>
        <div>
          <SubmitButton type="submit">Send</SubmitButton>
        </div>
      </Form>
    </ContactSection>
  )
}

export default Contact
