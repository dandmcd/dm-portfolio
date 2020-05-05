import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const StyledHero = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          defaultbg: file(relativePath: { eq: "hero/computerguy.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.defaultbg.childImageSharp.fluid
        console.log(data)
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
          ></BackgroundImage>
        )
      }}
    />
  )
}

export default styled(StyledHero)`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: block;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0.65) 100%
  );
  position: fixed;
  background-size: cover;
  background-position: center center;
  filter: contrast(85%) brightness(80%);
`
