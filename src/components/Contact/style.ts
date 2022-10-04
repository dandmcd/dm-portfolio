import styled from "styled-components"
import { CommonButton } from "../../css/styledCommon"

export const ContactSection = styled.div`
  max-width: 100vw;
`

export const EmailSection = styled.div`
  padding-top: 0.25em;
  padding-bottom: 1em;
  position: relative;
  color: #414033;
  margin: 0 auto;
`

export const EmailDiv = styled.div`
  position: relative;
`

export const EmailButton = styled(CommonButton)`
  font-size: 20px;
  display: flow-root;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 14px;
  }
`

export const Form = styled.form`
  width: 340px;
  height: 490px;
  background: #f9efac;
  border-radius: 1em;
  margin: 2em auto 2em auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  position: relative;
`

export const EmailSmHeader = styled.h2`
  text-align: center;
`

export const EmailExSmHeader = styled.h3`
  text-align: center;
`

export const Paragraph = styled.p`
  :before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 16px;
    color: #5a5a5a;
  }
`

export const ParagraphHidden = styled.p`
  visibility: hidden;
`

export const Input = styled.input`
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

export const InputMsg = styled.textarea`
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

export const SubmitButton = styled(CommonButton)`
  top: 30px;
  font-size: 18px;
`
