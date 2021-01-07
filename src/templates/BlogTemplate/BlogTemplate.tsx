import React, { FC } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import SEO from "../../components/SEO"
import CodeSnippet from "../../components/CodeSnippet"

import {
  ContentfulImg,
  GoBackBlock,
  ImgCaption,
  GoBack,
  Arrow,
  BlogTitle,
  UpdatedAt,
  Content,
  CodeBlock,
  ContentfulHeading,
  ContentfulP,
  Wrapper,
  ContentWrapper,
} from "./style"

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

export default BlogTemplate
