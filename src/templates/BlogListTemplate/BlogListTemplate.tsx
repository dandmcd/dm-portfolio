import React, { memo, FC } from "react"
import BlogPost from "../../components/BlogPosts/BlogPost"
import { Link, graphql } from "gatsby"
import SEO from "../../components/SEO"
import { GatsbyImageProps } from "gatsby-plugin-image"

import {
  BlogListing,
  PageTurner,
  Title,
  Prev,
  Next,
  ArrowLeft,
  ArrowRight,
} from "./style"

export interface GetPosts {
  data: {
    posts: {
      edges: {
        node: {
          contentful_id: number
          slug: string
          title: string
          updatedAt: string
          codeSnippet: {
            id: number
            codeSnippet: string
          }
          images: {
            gatsbyImageData: GatsbyImageProps
          }[]
          previewText: {
            previewText: string
          }
        }
      }[]
    }
  }
  pageContext: {
    currentPage: number
    numPages: number
  }
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int) {
    posts: allContentfulDmPortfolioBlog(
      skip: $skip
      limit: $limit
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          contentful_id
          updatedAt(formatString: "MMMM Do, YYYY")
          codeSnippet {
            id
            codeSnippet
          }
          previewText {
            previewText
          }
          images {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const BlogListTemplate: FC<GetPosts> = (props) => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blogs" : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const { data } = props

  return (
    <>
      <Title>The Whatever Blog</Title>
      {data.posts.edges.map(({ node }) => {
        return (
          <BlogListing key={node.contentful_id}>
            <BlogPost key={node.contentful_id} blog={node} />
          </BlogListing>
        )
      })}
      <PageTurner>
        <Prev>
          {!isFirst && (
            <Link to={prevPage}>
              <ArrowLeft></ArrowLeft>Previous Page
            </Link>
          )}
        </Prev>
        <Next>
          {!isLast && (
            <Link to={nextPage}>
              Next Page<ArrowRight></ArrowRight>
            </Link>
          )}
        </Next>
      </PageTurner>
    </>
  )
}

export default memo(BlogListTemplate)

export const Head = () => (
  <SEO title="blog" description="Random thoughts from Daniel" />
)
