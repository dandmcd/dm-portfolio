import styled from "styled-components"
import { CommonTitle } from "../../css/styledCommon"

export const BlogListing = styled.div`
  display: block;
  border-radius: 1em;
  max-width: 1024px;
  margin: 1em auto 0 auto;
  :nth-child(odd) {
    background-color: #f5e269;
  }
  :nth-child(even) {
    background-color: #f9efac;
  }
`
export const PageTurner = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled(CommonTitle)``

export const Prev = styled.div`
  font-size: 20px;
  padding: 1em;
`
export const Next = styled.div`
  font-size: 20px;
  padding: 1em;
`

export const ArrowLeft = styled.i`
  border: solid #414033;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(135deg);
`

export const ArrowRight = styled.i`
  border: solid #414033;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-45deg);
`
