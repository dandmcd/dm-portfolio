import React from "react"
import Footer from "./Footer"
import Transition from "./Transition"
import { GlobalStyle, theme } from "../css/globalstyled"
import { ThemeProvider } from "styled-components"
import Footx from "./Footx"

interface Props {
  children?: any
  location?: any
}

const Layout = ({ children, location }: Props) => {
  console.log(location)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Transition location={location}>{children}</Transition>

        <Footx location={location} />
      </ThemeProvider>
    </>
  )
}

export default Layout
