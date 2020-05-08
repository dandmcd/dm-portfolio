import React from "react"
import Project from "./Project"
import styled from "styled-components"

const ProjectsList = ({ projects }) => {
  return (
    <ProjectsContainer>
      {projects.edges.map(({ node }) => {
        return <Project key={node.contentful_id} project={node} />
      })}
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  row-gap: 20px;
  column-gap: 5px;
  align-items: center;
  justify-items: center;
  max-width: 1000px;
`

export default ProjectsList
