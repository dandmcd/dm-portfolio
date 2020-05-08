import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    description: { json },
  } = data.contentfulDmPortfolioProjects

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <div>
            <h3>this is cool image</h3>
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
            <p>images provided by me</p>
          </div>
        )
      },
    },
  }
  return (
    <RichText>
      <div>{title}</div>
      <div>{documentToReactComponents(json, options)}</div>
    </RichText>
  )
}

const RichText = styled.div`
  width: 75vw;
  background-color: rgba(0, 0, 0, 0.8);
`

export const query = graphql`
  query($slug: String!) {
    contentfulDmPortfolioProjects(slug: { eq: $slug }) {
      title
      description {
        json
      }
      technology
      updatedAt(formatString: "MMMM Do, YYYY")
      featured
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
    }
  }
`

export default ProjectTemplate
