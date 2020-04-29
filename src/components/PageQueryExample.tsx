import React from "react"
import { graphql } from "gatsby"

const PageQueryExample = ({ data }) => {
  return (
    <div>
      Hello
      <h1>title: {data.site.siteMetadata.title}</h1>
    </div>
  )
}

export const query = graphql`
  query BlogSiteMetadata {
    site {
      siteMetadata {
        title
        description
        author
        data {
          hireable
        }
        __typename
      }
    }
  }
`

export default PageQueryExample
