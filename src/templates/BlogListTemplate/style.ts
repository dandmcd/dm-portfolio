import styled from "styled-components"
import { CommonTitle } from "../../css/styledCommon"

export const BlogListing = styled.div`
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
  padding: 1em;
`
export const Next = styled.div`
  padding: 1em;
`

export const ArrowLeft = styled.i`
  border: solid #706d57;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
`

export const ArrowRight = styled.i`
  border: solid #706d57;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-45deg);
`
