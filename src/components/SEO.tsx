import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface GetData {
  site: {
    siteMetadata: {
      siteTitle: string
      siteDescription: string
      author: string
      siteUrl: string
    }
  }
}

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

interface SEOProps {
  title: string
  description?: string
}

const SEO: FunctionComponent<SEOProps> = ({
  title,
  description,
}): JSX.Element => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<GetData>(getData)
  const { siteDescription, siteTitle } = siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

export default SEO
