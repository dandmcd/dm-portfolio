import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"

const HeroBackground = ({ className }: { className: string }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          projectsbg: file(relativePath: { eq: "hero/wavepattern.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: NONE
                layout: FULL_WIDTH
              )
            }
          }
        }
      `}
      render={(data) => {
        const image = getImage(data.projectsbg.childImageSharp.gatsbyImageData)

        return (
          <BgImage
            Tag="section"
            className={className}
            style={{ position: undefined }}
            image={image}
            alt=""
          ></BgImage>
        )
      }}
    />
  )
}

export default styled(HeroBackground)`
  width: 100%;
  z-index: -100;
  height: 100vh;
  display: block;
  background-color: transparent;
  position: absolute;
  background-size: cover;
  background-position: center center;
  filter: contrast(85%) brightness(60%);
`
