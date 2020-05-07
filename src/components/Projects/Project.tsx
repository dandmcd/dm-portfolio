import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Project = ({ project }) => {
  const { title, slug, featured, images } = project
  console.log(project)
  return (
    <Container>
      {featured && (
        <Featured>
          <Link to={`/project/${slug}`}>{title}</Link>
          <h5>Image here</h5>
          <h5>Brief description</h5>
        </Featured>
      )}
      {!featured && (
        <Card>
          <Link to={`/project/${slug}`}>{title}</Link>
          <h5>Image here</h5>
          <h5>Brief description</h5>
        </Card>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 280px;
  margin: 0.5em;
  background-color: yellowgreen;
`

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
`

const Featured = styled(Card)`
  background-color: red;
`

export default Project
