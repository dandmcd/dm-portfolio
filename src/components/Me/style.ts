import styled, { keyframes } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { CommonTitle } from "../../css/styledCommon"

export const Cta = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: 0 1fr 0;
  grid-template-rows: auto 8em 1fr auto;
  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: 20px 1fr 20px;
  }
  :before {
    content: "";
    grid-column: 1/-1;
    grid-row: 1/3;
    background-color: #dfc412;
  }
`

export const Header = styled.header`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  z-index: 50;
  color: #fff;
  background-color: #dfc412;
  padding: 0 0 20px 0;
`

export const Footer = styled.footer`
  grid-column: 2/3;
  grid-row: -1;
  padding: 20px;
`

const fadeIn = keyframes`
    0% { opacity: 0; }

    50% {opacity: 0;}
    100%   { opacity: 1; }
`

export const Wrapper = styled.main`
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  grid-column-gap: 5px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 1em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px) brightness(80%);
  z-index: 50;
  width: 70vw;
  animation: ${fadeIn} 1s;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1824px) {
    width: 50vw;
  }
`

export const Title = styled(CommonTitle)`
  animation: ${fadeIn} 1s;
  @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
    font-size: 60px;
  }
`

export const FadeTitle = styled.span`
  animation: ${fadeIn} 1s;
`

export const FadeTitleB = styled.span`
  animation: ${fadeIn} 1s;
`

export const FadeTitleC = styled.span`
  animation: ${fadeIn} 1s;
`

export const IntroSection = styled.div`
  display: grid;
  grid-column-gap: 1em;
`
export const IntroBox = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  padding: 1em 1em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 /3;
    grid-column: 1 / 3;
  }
`

export const Intro = styled.h2`
  position: relative;
  color: #fff8f1;
  font-weight: 100;
  text-align: left;
  margin: 0 auto;
  padding-left: 0.3em;
  border-left: 3px solid #7b6c0a;

  @media only screen and (min-width: 1824px) {
    font-size: 28px;
  }
`

export const MeImg = styled(GatsbyImage)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-radius: 50%;
  border: 4px solid #f5e269;
  place-self: center center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 3;
  }
`

export const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`

export const CtaBtns = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  position: relative;
  animation: ${fadeIn} 1s;
  padding: 2em 2em;
`

export const BlogEntry = styled.p`
  padding: 0.3em 0 0 0;
  color: #dfc412;
  text-align: center;
  font-size: 18px;
  line-height: 1.4;
  a {
    color: #fef8f5;
    transition: color 0.6s ease;
    &:hover {
      color: rgba(254, 248, 245, 0.5);
    }
  }
`

export const BlogSpan = styled.span`
  text-indent: 1em;
`

export const Btn = styled.button`
  background-color: rgba(255, 255, 255, 0.75);
  border: 0.0625rem solid #80868b;
  outline: none;
  border-radius: 1em;
  text-indent: 0px;
  min-width: 156px;
  width: 100%;
  display: inline-block;
  color: #414033;
  font-size: 20px;
  font-weight: 600;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 40px;
  padding-right: 40px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: rgba(238, 238, 222, 0.5);
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 120px;
  }
`

export const Btn2 = styled(Btn)`
  margin-left: 0.2em;
`
