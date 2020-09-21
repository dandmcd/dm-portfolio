import React, { FC } from "react"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const ContactPage: FC = (): JSX.Element => {
  return (
    <>
      <SEO title="contact" description="Get in touch" />
      <Contact />
    </>
  )
}

export default ContactPage
