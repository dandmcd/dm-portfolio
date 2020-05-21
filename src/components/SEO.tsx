import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteDescription, siteTitle, siteUrl } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

export default SEO
