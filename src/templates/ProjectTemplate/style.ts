import styled from "styled-components"
import { CommonButton } from "../../css/styledCommon"

export const ContentfulImg = styled.div`
  padding: 0.3em;
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

export const ContentfulHeading = styled.h2`
  border-left: 3px solid #414033;
  padding: 0 0 0 0.2em;
`

export const ContentfulP = styled.p`
  padding: 0 0.5em 0.5em 1em;
  a {
    text-decoration: underline;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 340px);
  grid-template-rows: auto;
  height: 100vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const ContentSide = styled.div`
  overflow-y: auto;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: #f5e269;
  padding: 0.4rem;
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
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    display: contents;
  }
`
export const ProjectTitle = styled.h1`
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 52px;
  letter-spacing: 2px;
`

export const SideBar = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-left: 0.5px solid #c6c4b6;
  padding: 0.4rem;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 2;
  }
`
export const LinkSection = styled.div``

export const Preview = styled.h4`
  color: #706d57;
  margin: 2.5em;
  padding: 0.5em;
  border-left: 3px solid #414033;
  text-align: left;
  font-weight: 400;
`

export const ViewButtons = styled.div`
  text-align: center;
  margin: 0 auto;
`

export const GitLink = styled(CommonButton)`
  margin: 0.3rem auto;
  display: inline-block;
  font-size: 18px;
`

export const DemoLink = styled(GitLink)``

export const PackageBox = styled.h2`
  margin-top: 2rem;
  text-align: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 0;
  }
`

export const TechTags = styled.div`
  margin: 0 auto;
  text-align: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 1em 0 1em 0;
    border-radius: 1em;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
  }
`
export const TagList = styled.ul`
  margin: 0 auto;
  padding: 0;
  hr:last-child {
    display: none;
  }
`

export const Tag = styled.h4`
  color: #16140f;
  font-weight: 600;
`

export const TagLine = styled.hr`
  background: #8e8a6e;
  border: 0;
  height: 0.75px;
  width: 90px;
`
