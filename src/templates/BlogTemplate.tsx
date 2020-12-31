import React, { FC } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import styled from "styled-components"
import SEO from "../components/SEO"
import CodeSnippet from "../components/CodeSnippet"

interface GetPost {
  data: {
    target: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
    post: {
      title: string
      updatedAt: string
      previewText: {
        previewText: string
      }
    }
  }
}

const BlogTemplate: FC<GetPost> = ({ data }) => {
  const {
    title,
    updatedAt,
    previewText: { previewText },
    post: { json },
  } = data.post

  const goBack = () => {
    window.history.back()
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => (
        <ContentfulHeading>{children}</ContentfulHeading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <ContentfulP>{children}</ContentfulP>
      ),
      "embedded-asset-block": (node: GetPost) => {
        return (
          <ContentfulImg>
            <img width="320" src={node.data.target.fields.file["en-US"].url} />
            <ImgCaption>{node.data.target.fields.title["en-US"]}</ImgCaption>
          </ContentfulImg>
        )
      },
      "embedded-entry-block": (node: GetPost) => {
        return (
          <CodeBlock>
            <CodeSnippet
              markdown={node.data.target.fields.codeSnippet["en-US"]}
            />
          </CodeBlock>
        )
      },
    },
  }

  return (
    <>
      <SEO title={title} description={previewText} />
      <Wrapper>
        <BlogTitle>{title}</BlogTitle>
        <ContentWrapper>
          <UpdatedAt>Date: {updatedAt}</UpdatedAt>
          <Content>{documentToReactComponents(json, options)}</Content>
        </ContentWrapper>
      </Wrapper>
      <GoBackBlock>
        <GoBack onClick={goBack}>
          <Arrow></Arrow>Return to previous page
        </GoBack>
      </GoBackBlock>
    </>
  )
}

const ContentfulImg = styled.div`
  text-align: center;
`

const GoBackBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.2em 0 0 0.8em;
`

const ImgCaption = styled.p`
  margin: 0 auto;
`

const GoBack = styled.a`
  cursor: pointer;
`

const Arrow = styled.i`
  border: solid #706d57;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
`

const BlogTitle = styled.h1`
  margin: 0 auto;
  padding: 0.3em 0.3em;
  letter-spacing: 1px;
  background-color: #f5e269;
`
const UpdatedAt = styled.h4`
  color: #706d57;
  margin: 0.3em auto 0 1em;
`

const Content = styled.div`
  margin-top: 0.3em;
`

const CodeBlock = styled.div`
  padding: 0 2em 0 2em;
`

const ContentfulHeading = styled.h4`
  border-left: 3px solid #7b6c0a;
  background-color: #f9efac;
  border-radius: 0 4px 4px 0;
  padding: 0 0 0 0.2em;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.2px;
`

const ContentfulP = styled.p`
  font-size: 18px;
  font-weight: 300;
`

const Wrapper = styled.div`
  position: absolute;
  overflow-y: auto;
  left: 50%;

  top: 30%;
  transform: translate(-50%, -30%);
  border-radius: 14px;
  width: 60vw;
  height: 80vh;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100vw;
  }
  background-color: #fdfae5;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #f9efac;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f5e269;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #efd318;
  }
  ::-webkit-scrollbar-track {
    background: #483f06;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #9c890c;
  }
  ::-webkit-scrollbar-track:active {
    background: #efd318;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

const ContentWrapper = styled.div`
  padding: 0 3em 0 3em;
`

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulDmPortfolioBlog(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM Do, YYYY")
      previewText {
        previewText
      }
      codeSnippet {
        id
        codeSnippet
      }
      post {
        json
      }
    }
  }
`

export default BlogTemplate
