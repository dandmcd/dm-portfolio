import React from "react"
import Me from "../components/Me/Me"
import SEO from "../components/SEO"

export default (): JSX.Element => {
  return (
    <>
      <Me />
    </>
  )
}

export const Head = () => <SEO title="home" />
