import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

const BlogTemplate = ({ data }) => {
  const {
    title,
    updatedAt,
    post: { json },
  } = data.post

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
    <Wrapper>
      <RichText>
        <h1>{title}</h1>
        <h4>Date: {updatedAt}</h4>
        <div>{documentToReactComponents(json, options)}</div>
      </RichText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const RichText = styled.div`
  position: absolute;
  overflow-y: auto;
  left: 50%;
  margin-left: -30vw;
  margin-top: 2rem;
  border-radius: 4px;
  width: 60vw;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.72);
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #fefcab;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f3f397;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #c8c77c;
  }
  ::-webkit-scrollbar-track {
    background: #f9ca9b;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #d4ac84;
  }
  ::-webkit-scrollbar-track:active {
    background: #a28365;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulDmPortfolioBlog(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM Do, YYYY")
      post {
        json
      }
    }
  }
`

export default BlogTemplate
