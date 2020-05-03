import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const StyledHero = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          defaultbg: file(relativePath: { eq: "hero/splash.jpg" }) {
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
  position: fixed;
  background-color: #fff8f4;
  background-size: cover;
  background-position: center center;
  filter: contrast(80%) blur(4px);
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fef6c4'/%3E%3Cstop offset='1' stop-color='%23fef6c4' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fee8c6'/%3E%3Cstop offset='1' stop-color='%23fee8c6' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f0fc97'/%3E%3Cstop offset='1' stop-color='%23f0fc97' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff8f4'/%3E%3Cstop offset='1' stop-color='%23fff8f4' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d6fa96'/%3E%3Cstop offset='1' stop-color='%23d6fa96' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fdef98'/%3E%3Cstop offset='1' stop-color='%23fdef98' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
   background-attachment: fixed;
   background-size: cover;
   */
`
