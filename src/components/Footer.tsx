import React from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import styled, { keyframes } from "styled-components"

const Footer = () => {
  return (
    <Container>
      <List>
        {links.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link to={item.path}>{item.text}</Link>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

const Container = styled.div`
  z-index: 5;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px;
  font-size: 28px;
  font-weight: 600;
`

const swing = keyframes`

  15% {
    -webkit-transform: translateX(2px);
    transform: translateX(2px);
  }
  30% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  50% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  65% {
    -webkit-transform: translateX(-1px);
    transform: translateX(-1px);
  }
  80% {
    -webkit-transform: translateX(0.5px);
    transform: translateX(0.5px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`
const List = styled.ul`
  text-align: end;
  line-height: 1.5em;
  letter-spacing: 0.3em;
  list-style-type: none;
  margin: 0;
  padding: 0;
  animation: ${swing} 0.5s ease;
  animation-iteration-count: 1;

  a {
    text-decoration: none;
    transition: color 0.5s;
  }
  a:hover {
    color: #6d6c66;
  }
`

const ListItem = styled.li`
  ::first-letter {
    text-shadow: 1px 1px 2px #fdef98;
    color: #aaa166;
    transition: color 0.5s;
  }
  :hover {
    animation: ${swing} 0.5s ease;
    animation-iteration-count: 1;
  }
`
export default Footer
