import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsList from "./ProjectsList"
import { FixedObject } from "gatsby-image"

export interface ProjectProps {
  projects: {
    edges: {
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
      }
    }[]
  }
  project: {
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
  }
}

const Projects: FC = (): JSX.Element => {
  const { projects }: ProjectProps = useStaticQuery(graphql`
    {
      projects: allContentfulDmPortfolioProjects {
        edges {
          node {
            title
            slug
            contentful_id
            featured
            preview {
              preview
            }
            images {
              fixed(width: 480) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <ProjectsList projects={projects} />
    </>
  )
}

export default Projects
