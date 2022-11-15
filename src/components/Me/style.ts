import styled, { keyframes } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { CommonTitle } from "../../css/styledCommon"

export const Cta = styled.div`
  background-color: transparent;
  grid-template-columns: 0;
  grid-template-rows: auto auto;
  width: 100%;
`

export const Header = styled.header`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
`

const fadeIn = keyframes`
    0% { opacity: 0; }

    50% {opacity: 0;}
    100%   { opacity: 1; }
`

export const Title = styled(CommonTitle)`
  background-color: white;
  line-height: 1;
  text-align: center;
  font-size: 96px;
  animation: ${fadeIn} 1s;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
`

export const FadeTitle = styled.span`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
  animation: ${fadeIn} 1.5s;
`

export const FadeTitleB = styled.span`
  font-size: 90px;
  animation: ${fadeIn} 2s;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 52px;
  }
`

export const FadeTitleC = styled.span`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
  animation: ${fadeIn} 2.5s;
`

export const Wrapper = styled.main`
  margin: 2rem auto 2rem auto;
  max-width: 1024px;
  padding: 20px;
  border-radius: 1em;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  width: 70vw;
  animation: ${fadeIn} 3s;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1824px) {
    width: 50vw;
  }
`

export const IntroSection = styled.div`
  display: grid;
  grid-column-gap: 1em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
`

export const Social = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

export const MediaIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0 1em 0;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: space-space-between;
  }
`

export const MediaIcon = styled.img`
  width: 32px;
  :hover {
    transform: scale(1.1);
  }
`

export const MeImg = styled(GatsbyImage)`
  margin: 0 auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  place-self: center center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 3;
  }
`

export const IntroBox = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 2;
  position: relative;
  padding: 1em 1em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`

export const Intro = styled.h2`
  position: relative;
  color: #16140f;
  font-weight: 200;
  text-align: left;
  margin: 0 auto;
  padding-left: 0.3em;
  border-left: 3px solid #414033;

  @media only screen and (min-width: 1824px) {
    font-size: 28px;
  }
`

export const CtaBtns = styled.div`
  animation: ${fadeIn} 1s;
  padding: 2em 2em;
`

export const BlogEntry = styled.h3`
  padding: 0.3em 0 0 0;
  color: #414033;
  text-align: center;
  font-size: 26px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  a {
    font-size: 24px;
  }
`

export const BlogSpan = styled.span`
  font-weight: 400;
  text-shadow: none;
  text-indent: 1em;
`

export const Tools = styled.h2`
  font-weight: 800;
  -webkit-text-stroke: 1px black;
  color: #dfc412;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
`
