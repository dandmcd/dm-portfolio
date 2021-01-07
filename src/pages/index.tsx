import React from "react"
import Me from "../components/Me/Me"
import SEO from "../components/SEO"

export default (): JSX.Element => {
  return (
    <>
      <SEO title="home" />
      <Me />
    </>
  )
}
