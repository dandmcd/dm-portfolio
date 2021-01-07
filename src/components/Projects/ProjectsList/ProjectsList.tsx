import React, { FC } from "react"

import Project from "../Projects/Project/Project"
import { ProjectProps } from "../Projects/Projects"
import FeaturedProject from "../FeaturedProject/FeaturedProject"

import { CommonTitle } from "../../../css/styledCommon"
import { Container, FeaturedProjectContainer, ProjectsContainer } from "./style"
import { FixedObject } from "gatsby-image"

export interface NodeProps {
  node: {
    title: string
    slug: string
    contentful_id: number
    featured: boolean
    preview: {
      preview: string
    }
    images: {
      fixed: FixedObject[]
    }[]
    featuredImages: {
      fixed: FixedObject[]
    }[]
  }
}

const ProjectsList: FC<ProjectProps> = ({ projects }) => {
  const filtered = projects.edges.filter((edge) => edge.node.featured === true)
  const featured: NodeProps = filtered[0]
  const notFeatured = projects.edges.filter(
    (edge) => edge.node.featured === false
  )
  return (
    <Container>
      <CommonTitle>Daniel's Projects</CommonTitle>
      <FeaturedProjectContainer>
        {filtered.map(({ node }) => {
          return (
            <FeaturedProject key={featured.node.contentful_id} node={node} />
          )
        })}
      </FeaturedProjectContainer>
      <ProjectsContainer>
        {notFeatured.map(({ node }) => {
          return <Project key={node.contentful_id} node={node} />
        })}
      </ProjectsContainer>
    </Container>
  )
}

export default ProjectsList
