import styled from "styled-components"
import { CommonButton } from "../../css/styledCommon"

export const ContentfulImg = styled.div`
  text-align: center;
`

export const Img = styled.img`
  width: 80%;
  border-radius: 1em;
  cursor: zoom-in;
`

export const ImgCaption = styled.p`
  margin: 0 auto;
  padding: 0 0 0.8em 0;
  font-weight: 300;
`

export const ContentfulHeading = styled.h2`
  border-left: 3px solid #7b6c0a;
  padding: 0 0 0 0.2em;
  margin: 0 auto 0 0.5em;
`

export const ContentfulP = styled.p`
  padding: 0 0.5em 0.5em 1em;
`

export const Container = styled.div`
  max-width: 1100px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 340px);
  grid-template-rows: auto;
  width: 100vw;
  height: 100vh;
`

export const ContentSide = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: #f5e269;
  padding: 0.4rem;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
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
    grid-column: 1 / 3;
  }
`
export const LinkSection = styled.div``

export const Preview = styled.h5`
  color: #706d57;
  margin: 3em;
  padding: 0.5em;
  border-left: 5px solid #414033;
  text-align: left;
  font-weight: 400;
`

export const ViewButtons = styled.div`
  text-align: center;
  margin: 0 auto;
`

export const GitLink = styled(CommonButton)`
  margin: 0.3rem auto;
  background-color: white;
  width: 230px;
  display: inline-block;
  font-size: 18px;
`

export const DemoLink = styled(GitLink)``

export const PackageBox = styled.h2`
  margin-top: 2rem;
  text-align: center;
`

export const TechTags = styled.div`
  margin: 0 auto;
  text-align: center;
`
export const TagList = styled.ul`
  margin: 0 auto;
  padding: 0;
  hr:last-child {
    display: none;
  }
`

export const Tag = styled.h4`
  font-weight: 600;
`

export const TagLine = styled.hr`
  background: #8e8a6e;
  border: 0;
  height: 0.75px;
  width: 90px;
`
