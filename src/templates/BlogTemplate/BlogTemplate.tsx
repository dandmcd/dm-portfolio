/* eslint-disable react/display-name */
import React, { FC } from "react"
import { graphql } from "gatsby"
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from "gatsby-source-contentful/rich-text"
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
    blogPost: {
      title: string
      updatedAt: string
      previewText: {
        previewText: string
      }
      post: {
        raw: string
      }
    }
  }
}
interface ContentfulProps {
  data: {
    target: {
      file: {
        url: string
      }
      title: string
      codeSnippet: {
        codeSnippet: string
      }
    }
  }
}

export const query = graphql`
  query getPost($slug: String!) {
    blogPost: contentfulDmPortfolioBlog(slug: { eq: $slug }) {
      title
      updatedAt(formatString: "MMMM Do, YYYY")
      previewText {
        previewText
      }
      post {
        raw
        references {
          ... on ContentfulCodeSnippets {
            id
            codeSnippet {
              codeSnippet
            }
            __typename
          }
          ... on ContentfulEntry {
            contentful_id
            __typename
          }
          ... on ContentfulAsset {
            contentful_id
            title
            file {
              url
            }
            __typename
          }
        }
      }
    }
  }
`

const BlogTemplate: FC<GetPost> = ({ data }) => {
  const {
    title,
    updatedAt,
    previewText: { previewText },
    post,
  } = data.blogPost

  const goBack = () => {
    window.history.back()
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (
        node: ContentfulProps,
        children: ContentfulRichTextGatsbyReference
      ) => <ContentfulHeading>{children}</ContentfulHeading>,
      [BLOCKS.PARAGRAPH]: (
        node: ContentfulProps,
        children: ContentfulRichTextGatsbyReference
      ) => <ContentfulP>{children}</ContentfulP>,
      [BLOCKS.EMBEDDED_ASSET]: (node: ContentfulProps) => {
        return (
          <ContentfulImg>
            <img width="320" src={node.data.target.file.url} />
            <ImgCaption>{node.data.target.title}</ImgCaption>
          </ContentfulImg>
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: ContentfulProps) => {
        return (
          <CodeBlock>
            <CodeSnippet markdown={node.data.target.codeSnippet.codeSnippet} />
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
          <Content>{post && renderRichText(post, options)}</Content>
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
