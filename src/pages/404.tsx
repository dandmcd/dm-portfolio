import React, { FC } from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import styled from "styled-components"

const Error404: FC = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Error"
        description="You landed on a page that doesn't exist"
      />
      <Title>
        404 - <Link to="/">Go home</Link>
      </Title>
    </>
  )
}

const Title = styled.h1`
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  background-color: #dfc412;
  position: relative;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

export default Error404
