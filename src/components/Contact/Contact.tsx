import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <ContactSection>
      <EmailSection>
        <EmailHeader>Let's get in touch.</EmailHeader>
        <EmailDiv>
          <EmailSmHeader>Contact me by email:</EmailSmHeader>
          <EmailButton href="mailto:mail@danielmcdermott.me">
            mail@danielmcdermott.me
          </EmailButton>
        </EmailDiv>
      </EmailSection>

      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <EmailSmHeader>No time for email? </EmailSmHeader>
        <EmailExSmHeader>Fill in the easy contact form below:</EmailExSmHeader>
        <input type="hidden" name="form-name" value="contact" />
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

const Form = styled.form`
  width: 340px;
  height: 490px;
  background: #fdfae5;
  border-radius: 8px;
  margin: 3em auto 1em auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #a4a089;
  :focus {
    border-bottom: 2px solid #414033;
  }
`

const InputMsg = styled.textarea`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border: 2px solid #a4a089;
  :focus {
    border: 2px solid #414033;
  }
`

const EmailSmHeader = styled.h2`
  text-align: center;
`

const EmailExSmHeader = styled.h3`
  text-align: center;
`

const P = styled.p`
  :before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 16px;
    color: #5a5a5a;
  }
`

const SubmitButton = styled.button`
  float: right;
  background-color: rgba(250, 249, 249, 0.8);
  border: 2px solid #b6b4a1;
  border-radius: 20px;
  text-indent: 0px;
  color: #414033;
  font-size: 12px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  text-decoration: none;
  position: relative;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #78788c;
    color: #fff;
  }
`

const ContactSection = styled.div`
  max-width: 100vw;
`

const EmailSection = styled.div`
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  background-color: #dfc412;
  position: relative;
  color: #414033;
  margin: 0 auto;
`

const EmailDiv = styled.div`
  position: relative;
`

const EmailButton = styled.a`
  background-color: rgba(255, 255, 255, 0.8);
  border: 0.0625rem solid #80868b;
  border-radius: 20px;
  text-indent: 0px;
  display: inline-block;
  color: #666666;
  font-size: 12px;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  text-decoration: none;
  position: relative;
  margin: 0 auto;
  text-align: center;
  display: flex;
  max-width: fit-content;
`

const Email = styled.a``

const EmailHeader = styled.h1`
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

export default Contact
