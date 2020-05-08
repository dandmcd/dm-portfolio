import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Project = ({ project }) => {
  const { title, slug, featured, images } = project
  console.log(images)
  return (
    <Container>
      {featured && (
        <Featured>
          <ProjectLink to={`/project/${slug}`}>{title}</ProjectLink>
          <ProjectImg fixed={images[0].fixed} />
          <ProjectDescription>Brief description</ProjectDescription>
        </Featured>
      )}
      {!featured && (
        <Card>
          <ProjectLink to={`/project/${slug}`}>{title}</ProjectLink>
          <ProjectImg fixed={images[0].fixed} />
          <ProjectDescription>Brief description</ProjectDescription>
        </Card>
      )}
    </Container>
  )
}

const Container = styled.div``

const Card = styled.div`
  display: grid;
  grid-template-rows: 2rem 280px 1fr;
  grid-template-columns: 1fr;
  position: relative;
  width: 280px;
  margin: 0.5em;
  background-color: yellowgreen;
`

const Featured = styled(Card)`
  background-color: red;
`
const ProjectLink = styled(Link)`
  grid-row: 1 / 2;
`

const ProjectImg = styled(Img)`
  grid-row: 2 / 3;
`

const ProjectDescription = styled.h5`
  grid-row: 3 / 4;
`

export default Project
