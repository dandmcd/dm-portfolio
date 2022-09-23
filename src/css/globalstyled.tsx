import { createGlobalStyle } from "styled-components"
import wavepattern from "../images/hero/wavepattern5.svg"

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
    min-height: 100vh;
    z-index: 1;
  font-family: "Barlow Semi Condensed", sans-serif;
  margin: 0;
  padding: 0;
  color: #111;
  outline: none;
  background-image: url(${wavepattern});
  background-size: cover;
  background-repeat: no-repeat;

  }
  button {
    font-family: "Barlow Semi Condensed", sans-serif;
  }
  a {
  color: #483f06;
  text-decoration: none;
  transition: color 0.5s;
  :hover {
    color: #706d57;
  }
}
h1 {
      font-size: 36px;
  }
    h2 {
      color: #16140F;
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
  /* #EFD213 */
`
