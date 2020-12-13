import React, { FC } from "react"
import Project from "./Project"
import styled from "styled-components"
import { ProjectProps } from "./Projects"
import FeaturedProject from "./FeaturedProject"

const ProjectsList: FC<ProjectProps> = ({ projects }) => {
  const featured = projects.edges.filter((edge) => edge.node.featured === true)
  const notFeatured = projects.edges.filter(
    (edge) => edge.node.featured === false
  )
  return (
    <Container>
      <Title>Daniel's Projects</Title>
      <FeaturedProjectContainer>
        <FeaturedProject
          key={featured[0].node.contentful_id}
          project={featured[0].node}
        />
      </FeaturedProjectContainer>
      <ProjectsContainer>
        {notFeatured.map(({ node }) => {
          return <Project key={node.contentful_id} project={node} />
        })}
      </ProjectsContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`
const Title = styled.h1`
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  background-color: #dfc412;
  position: relative;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

const FeaturedProjectContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #414033;
  position: relative;
  color: #414033;
  margin: 0 auto;
  text-align: center;
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
  padding: 1em 0;
  left: 50%;
  transform: translateX(-50%);
`

export default ProjectsList
