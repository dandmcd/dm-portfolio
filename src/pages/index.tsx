import React, { useState } from "react"
import Me from "../components/Me"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"

export default () => {
  const [isRunning, setIsRunning] = useState(true)
  return (
    <>
      <SEO title="home" />
      <StyledHero isRunning={isRunning} setIsRunning={setIsRunning} />
      <Me isRunning={isRunning} setIsRunning={setIsRunning} />
    </>
  )
}
