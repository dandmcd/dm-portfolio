import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query RegSiteMetadata {
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

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)
        return (
          <>
            <h2>title: {data.site.siteMetadata.title}</h2>
            <h2>author: {data.site.siteMetadata.author}</h2>
          </>
        )
      }}
    />
  )
}

export default RegularHeader
