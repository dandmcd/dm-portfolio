import React from "react"
import Footer from "./Footer"
import Transition from "./Transition"
import { GlobalStyle, theme } from "../css/globalstyled"
import { ThemeProvider } from "styled-components"

interface Props {
  children?: any
  location?: any
}

const Layout = ({ children, location }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Transition location={location}>{children}</Transition>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
