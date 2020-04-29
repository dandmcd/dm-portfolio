import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Contact from "../components/Contact/Contact"

const getContactImg = graphql`
  query contactImage {
    contactImage: file(relativePath: { eq: "hero/computerguy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ContactPage = () => {
  const { contactImage } = useStaticQuery(getContactImg)
  return (
    <Container>
      <Contact />
      <Img fluid={contactImage.childImageSharp.fluid} alt="Me" />
    </Container>
  )
}

const Container = styled.div`
  width: 50%;
`

export default ContactPage
