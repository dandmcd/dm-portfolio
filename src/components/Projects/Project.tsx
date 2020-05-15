import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Project = ({ project }) => {
  console.log(project)
  const {
    title,
    slug,
    featured,
    preview: { preview },
    images,
  } = project
  return (
    <>
      <Figure>
        <FigCaption>
          <ProjectTitle>
            <ProjectLink to={`/project/${slug}`}>{title}</ProjectLink>
          </ProjectTitle>
          <ProjectDescription>{preview}</ProjectDescription>
          <ProjectViewMore>
            <ProjectLink to={`/project/${slug}`}>View More</ProjectLink>
          </ProjectViewMore>
        </FigCaption>
        <div>
          <ProjectImg fixed={images[0].fixed} />
        </div>
      </Figure>
    </>
  )
}

const Figure = styled.div`
  z-index: 2;
  position: relative;
  float: left;
  overflow: hidden;
  border-radius: 4px;
  min-width: 320px;
  max-width: 320px;
  max-height: 360px;
  width: 48%;
  /* background: #3085a3; */
  text-align: center;
  cursor: pointer;
  background: rgb(72, 63, 6);
  background: linear-gradient(
    90deg,
    rgba(72, 63, 6, 0.95) 20%,
    rgba(156, 137, 12, 0.9) 100%
  );
  /* background: -webkit-linear-gradient(45deg, #ff89e9 0%, #05abe0 100%);
  background: linear-gradient(45deg, #ff89e9 0%, #05abe0 100%); */
`

const FigCaption = styled.div`
  display: grid;
  position: absolute;
  z-index: 2;
  width: 100%;
  font-size: 1.25em;
  text-align: left;
  color: #faf9f8;
  backface-visibility: hidden;

  &:after {
    pointer-events: none;
  }
  ${Figure} > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const ProjectTitle = styled.h2`
  grid-row: 1 / 2;
  margin: 0;
  a {
    color: #414033;
  }
  letter-spacing: 2px;
  font-size: 32px;
  padding: 0.5em 0.5em;
  word-spacing: -0.15em;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 249, 248, 0.6);
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    color: #faf9f8;
    background: #efd318;
    content: "";
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  ${Figure}:hover &:after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

const ProjectViewMore = styled.h2`
  background-color: rgba(255, 255, 255, 0.6);
a {
  font-weight: 400;
}
  padding: 0.5em 0.5em;
  word-spacing: -0.1em;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  ${Figure}:hover & {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
`

const ProjectLink = styled(Link)``

const ProjectImg = styled(Img)`
  grid-row: 1 / 4;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
  max-width: none;
  width: -webkit-calc(100% + 60px);
  width: calc(100% + 60px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-50px, 0, 0);
  transform: translate3d(-50px, 0, 0);
  ${Figure}:hover & {
    opacity: 0.2;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

const ProjectDescription = styled.p`
  grid-row: 2 / 4;
  color: #faf9f8;
  margin: 1em;
  padding: 0.5em;
  opacity: 0;
  font-size: 14px;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  ${Figure}:hover & {
    opacity: 1;
    border-left: 5px solid #414033;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`

export default Project
