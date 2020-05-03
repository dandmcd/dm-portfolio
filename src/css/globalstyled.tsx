import React from "react"
import { createGlobalStyle } from "styled-components"

export const theme = {
  appBody: "#fff",
  container: "#faf9f9",
  primary: "#ca3131",
  primaryDark: "#781d1d",
  primaryMed: "#e08787",
  primaryLightMed: "#f1caca",
  primaryLight: "#fdf8f8",
  text: "#4c3b3b",
  textLight: "#b09b9b",
  textOverlay: "#9d8383",
  neutralLight: "#F2F2F2",
  secondary: "#30c6c6",
  secondaryDark: "#1d7878",
  secondaryLight: "#d3f4f4",
  disabled: "#faeaea",
  error: "#d86666",
  success: "#71da71",
  link: "#ca3131",
  hoverLink: "#e08787",
}

export const GlobalStyle = createGlobalStyle`
  body {
    z-index: 1;
    background-color: #000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff48d'/%3E%3Cstop offset='1' stop-color='%23fff48d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffed52'/%3E%3Cstop offset='1' stop-color='%23ffed52' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffe43b'/%3E%3Cstop offset='1' stop-color='%23ffe43b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fffaa4'/%3E%3Cstop offset='1' stop-color='%23fffaa4' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffed76'/%3E%3Cstop offset='1' stop-color='%23ffed76' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffd900'/%3E%3Cstop offset='1' stop-color='%23ffd900' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  font-family: "Barlow Semi Condensed", sans-serif;
  margin: 0 auto;
  padding: 0;
  color: #eeeeea;
  }
  a {
  color: #8c8c57;
  text-decoration: none;
}
h1 {
      font-size: 36px;
  }
    h2 {
      font-size: 24px;
  }
    h3 {
      font-size: 18px;
      font-weight: 600;
  }
    h4 {
      font-size: 14px;
  }
    h5 {
      font-size: 12px;
  }
    h6 {
      font-size: 8px;
  }
`
