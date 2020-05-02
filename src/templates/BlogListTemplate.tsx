import React, { memo } from "react"
import BlogPost from "../components/BlogPosts/BlogPost"
import BlogPostList from "../components/BlogPosts/BlogPostList"
import { Link, graphql } from "gatsby"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blogs" : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  const { data } = props

  return (
    <div>
      <div>Posts</div>
      <div>
        {data.posts.edges.map(({ node }) => {
          return <BlogPost key={node.contentful_id} blog={node} />
        })}
      </div>
      <div>
        {!isFirst && <Link to={prevPage}>Previous Page</Link>}
        {/* {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/blogs/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))} */}
        {!isLast && <Link to={nextPage}>Next Page</Link>}
      </div>
    </div>
  )
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
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default memo(BlogListTemplate)
