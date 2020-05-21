import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

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
    <>
      <SEO title="contact" description="Get in touch" />
      <Contact />
    </>
  )
}

export default ContactPage
