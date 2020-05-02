import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsList from "./ProjectsList"

const Projects = () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allContentfulDmPortfolioProjects {
        edges {
          node {
            title
            slug
            contentful_id
            featured
            updatedAt(formatString: "MMMM Do, YYYY")
            technology
            description {
              json
            }
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  return <ProjectsList projects={projects} />
}

export default Projects
