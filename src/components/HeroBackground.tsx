import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const HeroBackground = ({ className }: { className: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          projectsbg: file(relativePath: { eq: "hero/computersplash3.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            style={{ position: undefined }}
            fluid={data.projectsbg.childImageSharp.fluid}
          ></BackgroundImage>
        )
      }}
    />
  )
}

export default styled(HeroBackground)`
  width: 100vw;
  z-index: -100;
  height: 100vh;
  display: block;
  background-color: transparent;
  position: absolute;
  background-size: cover;
  background-position: center center;
  filter: contrast(85%) brightness(60%);
`
