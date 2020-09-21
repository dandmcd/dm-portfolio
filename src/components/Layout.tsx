import React from "react"
import Transition from "./Transition"
import { GlobalStyle, theme } from "../css/globalstyled"
import { ThemeProvider } from "styled-components"
import Footer from "./Footer"

const Layout = (props: {
  children: React.ReactNode
  location: Location
}): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Transition location={location}>{props.children}</Transition>

        <Footer location={props.location} />
      </ThemeProvider>
    </>
  )
}

export default Layout
