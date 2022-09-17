import React, { FunctionComponent } from "react"
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
    <>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDescription} />
    </>
  )
}

export default SEO
