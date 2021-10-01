import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

export const Container = styled.div`
  max-width: 1100px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 3fr;
  margin-bottom: 1em;
`

export const BlogImg = styled(GatsbyImage)`
  grid-column: 1 / 2;
  max-width: 200px;
`

export const TextFields = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 1fr 1fr 2 29px;
`
export const Title = styled.h2`
  margin: 0.1em 0 0 0.5em;
  letter-spacing: 1px;
`

export const UpdatedAt = styled.h5`
  color: #706d57;
  margin: 0.1em 0 0 1em;
`

export const Preview = styled.h3`
  font-weight: 400;
  padding: 0.3em 0.5em 0.5em 1em;
`

export const ViewMore = styled.h2`
  background-color: rgba(255, 249, 248, 0.85);
  padding: 0 3em 0 0;
  font-weight: 200;
  text-align: right;
`
