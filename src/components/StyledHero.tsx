import React, { useEffect, useState } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"
import { useInterval } from "../utilities/useInterval"

const StyledHero = ({ className, isRunning, setIsRunning }) => {
  const [background, setBackground] = useState([])
  const [selectedImage, setSelectedImage] = useState([])
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(3500)

  return (
    <StaticQuery
      query={graphql`
        query {
          defaultbg: file(relativePath: { eq: "hero/computerguy.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          changingbg1: file(relativePath: { eq: "hero/computersplash.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          changingbg2: file(relativePath: { eq: "hero/computersplash2.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          changingbg3: file(relativePath: { eq: "hero/computersplash3.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          changingbgfinal: file(relativePath: { eq: "hero/computerdanb.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        useEffect(() => {
          setBackground([
            data.defaultbg.childImageSharp.fluid,
            data.changingbg1.childImageSharp.fluid,
            data.changingbg2.childImageSharp.fluid,
            data.changingbg3.childImageSharp.fluid,
            data.changingbgfinal.childImageSharp.fluid,
          ]),
            setSelectedImage(data.defaultbg.childImageSharp.fluid)
        }, [])

        useEffect(() => {
          if (count === 4) {
            setIsRunning(false)
          }
        }, [count])
        console.log(isRunning)
        useInterval(
          () => {
            background.shift()

            setCount(count + 1)
          },
          isRunning ? delay : null
        )

        function handleIsRunningChange(e) {
          setIsRunning(e.target.checked)
        }
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={background[0]}
          >
            <input
              type="checkbox"
              checked={isRunning}
              onChange={handleIsRunningChange}
            />{" "}
            Running
            <h1>{count}</h1>
          </BackgroundImage>
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
  background-color: transparent;
  position: fixed;
  background-size: cover;
  background-position: center center;
  filter: contrast(85%) brightness(80%);
`
