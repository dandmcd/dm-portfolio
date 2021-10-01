import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsList from "../ProjectsList/ProjectsList"
import { GatsbyImageProps } from "gatsby-plugin-image"

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
          gatsbyImageData: GatsbyImageProps
        }[]
        featuredImages: {
          gatsbyImageData: GatsbyImageProps
        }[]
      }
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
              gatsbyImageData(width: 480)
            }
            featuredImages: images {
              gatsbyImageData(width: 1000)
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
