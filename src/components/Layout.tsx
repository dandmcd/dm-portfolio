import React from "react"
import Transition from "./Transition"
import { GlobalStyle, theme } from "../css/globalstyled"
import { ThemeProvider } from "styled-components"
import Footer from "./Footer"

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

        <Footer location={location} />
      </ThemeProvider>
    </>
  )
}

export default Layout
