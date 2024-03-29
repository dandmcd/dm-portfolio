import styled from "styled-components"

export const ContentfulHeading = styled.h4`
  border-left: 3px solid #414033;
  background-color: #f9efac;
  border-radius: 0 4px 4px 0;
  padding: 0 0 0 0.2em;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
`

export const ContentfulP = styled.p`
  font-size: 18px;
  font-weight: 300;
  a {
    text-decoration: underline;
  }
`

export const ContentfulImg = styled.div`
  text-align: center;
`

export const Img = styled.img`
  width: 80%;
  max-width: 800px;
  border-radius: 1em;
  cursor: zoom-in;
`

export const ImgCaption = styled.p`
  margin: 0 auto;
  border-radius: 1em;
  backdrop-filter: blur(5px) brightness(55%);
  opacity: 1;
  max-width: 75%;
  padding: 0.3em;
  font-size: 18px;
  color: #fef8ed;
  font-weight: 400;
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  border-radius: 1em;
  width: 60vw;
  height: 80vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
  }
  background-color: #fdfae5;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #f9efac;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f5e269;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #efd318;
  }
  ::-webkit-scrollbar-track {
    background: #483f06;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #9c890c;
  }
  ::-webkit-scrollbar-track:active {
    background: #efd318;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const BlogTitle = styled.h1`
  margin: 0 auto;
  padding: 0.3em 0.3em;
  letter-spacing: 1px;
  background-color: #f5e269;
`

export const ContentWrapper = styled.div`
  padding: 0 3em 0 3em;
`

export const UpdatedAt = styled.h4`
  color: #706d57;
  margin: 0.3em auto 0 1em;
`

export const Content = styled.div`
  margin-top: 0.3em;
`

export const GoBackBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.2em 0 0 0.8em;
  margin-left: 0.5rem;
`

export const BlogLink = styled.a`
  text-decoration: underline;
`

export const GoBack = styled.a`
  font-size: 20px;
  cursor: pointer;
`

export const Arrow = styled.i`
  border: solid #414033;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
`

export const CodeBlock = styled.div`
  padding: 0 2em 0 2em;
`
