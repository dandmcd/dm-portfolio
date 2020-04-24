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
  background-color: #ffb464;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23ffb464' width='11' height='11'/%3E%3Crect fill='%23ffb565' x='10' width='11' height='11'/%3E%3Crect fill='%23ffb765' y='10' width='11' height='11'/%3E%3Crect fill='%23ffb866' x='20' width='11' height='11'/%3E%3Crect fill='%23ffb966' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23ffbb67' y='20' width='11' height='11'/%3E%3Crect fill='%23ffbc68' x='30' width='11' height='11'/%3E%3Crect fill='%23ffbd68' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23ffbf69' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23ffc06a' y='30' width='11' height='11'/%3E%3Crect fill='%23ffc16a' x='40' width='11' height='11'/%3E%3Crect fill='%23ffc26b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23ffc46c' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23ffc56c' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23ffc66d' y='40' width='11' height='11'/%3E%3Crect fill='%23ffc86e' x='50' width='11' height='11'/%3E%3Crect fill='%23ffc96f' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23ffca70' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23ffcb70' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23ffcd71' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23ffce72' y='50' width='11' height='11'/%3E%3Crect fill='%23ffcf73' x='60' width='11' height='11'/%3E%3Crect fill='%23ffd174' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23ffd275' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23ffd376' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23ffd477' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23ffd678' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23ffd779' x='70' width='11' height='11'/%3E%3Crect fill='%23ffd87a' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23ffda7b' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23ffdb7c' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23ffdc7d' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23ffdd7e' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23ffdf7f' x='80' width='11' height='11'/%3E%3Crect fill='%23ffe080' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23ffe181' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23ffe282' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23ffe483' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23ffe584' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ffe685' x='90' width='11' height='11'/%3E%3Crect fill='%23ffe887' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ffe988' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ffea89' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23ffeb8a' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23feed8b' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23feee8d' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23feef8e' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23fef08f' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23fef190' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23fef392' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23fef493' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23fef594' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23fef695' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23fef897' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23fef998' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23fdfa99' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23fdfb9b' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23fdfd9c' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23fdfe9e' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23fdff9f' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  font-family: "Barlow Semi Condensed", sans-serif;
  margin: 0 auto;
  padding: 0;
  color: #eeeeea;
  }
  a {
  color: ${props => props.theme.link};
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
