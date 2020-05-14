import React from "react"
import Project from "./Project"
import styled from "styled-components"

const ProjectsList = ({ projects }) => {
  return (
    <Container>
      <Title>My Projects. Have a look.</Title>
      <ProjectsContainer>
        {projects.edges.map(({ node }) => {
          return <Project key={node.contentful_id} project={node} />
        })}
      </ProjectsContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`

const ProjectsContainer = styled.div`
  display: grid;
  z-index: 2;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  row-gap: 20px;
  column-gap: 5px;
  align-items: center;
  justify-items: center;
  max-width: 900px;
  top: 3em;

  left: 50%;
  transform: translateX(-50%);
`

const Title = styled.h1`
  position: relative;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

export default ProjectsList
