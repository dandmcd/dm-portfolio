import React, { useState } from "react"
import Me from "../components/Me"
import StyledHero from "../components/StyledHero"

export default () => {
  const [isRunning, setIsRunning] = useState(true)
  return (
    <>
      <StyledHero isRunning={isRunning} setIsRunning={setIsRunning} />
      <Me isRunning={isRunning} setIsRunning={setIsRunning} />
    </>
  )
}
