import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogPost from "./BlogPost"

const getPosts = graphql`
  query {
    posts: allContentfulDmPortfolioBlog(
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

const BlogPosts = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <div>
      <h2>This is a blog post</h2>
      {posts.edges.map(({ node }) => {
        return <BlogPost key={node.id} blog={node} />
      })}
    </div>
  )
}

export default BlogPosts
