import React, { memo, FC } from "react"
import BlogPost from "../components/BlogPosts/BlogPost"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/SEO"
import { FluidObject } from "gatsby-image"

export interface GetPosts {
  data: {
    posts: {
      edges: {
        node: {
          contentful_id: number
          slug: string
          title: string
          updatedAt: string
          images: {
            fluid: FluidObject[]
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
      <SEO title="blog" description="Random thoughts from Daniel" />
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

const BlogListing = styled.div`
  margin: 1em auto 0 auto;
  :nth-child(odd) {
    background-color: #f5e269;
  }
  :nth-child(even) {
    background-color: #f9efac;
  }
`
const PageTurner = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  background-color: #dfc412;
  position: relative;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

const Prev = styled.div`
  padding: 1em;
`
const Next = styled.div`
  padding: 1em;
`

const ArrowLeft = styled.i`
  border: solid #706d57;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
`

const ArrowRight = styled.i`
  border: solid #706d57;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-45deg);
`

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
          previewText {
            previewText
          }
          images {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default memo(BlogListTemplate)
