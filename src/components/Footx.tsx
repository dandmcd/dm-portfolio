import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import styled, { keyframes } from "styled-components"

const Footx = ({ location }) => {
  const [clicked, setIsClicked] = useState(false)

  const toggleMenu = () => {
    setIsClicked(clicked === false ? true : false)
    console.log(clicked)
  }

  return (
    <>
      <Float onClick={toggleMenu} id="menu-share">
        <MyFloat>
          <Hamburger clicked={clicked}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MyFloat>
      </Float>
      <List location={location}>
        {links.map((item, index) => {
          return (
            <ListItem clicked={clicked} key={index}>
              <Link to={item.path}>{item.text}</Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 48px;
  right: 105px;
  display: table;
  visibility: hidden;
`
const Float = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 20px;
  background-color: #efd318;

  border-radius: 14px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  animation: bot-to-top 2s ease-out;
  #menu-share + ul {
    visibility: hidden;
  }
`

const Hamburger = styled.div`
  width: 35px;
  height: 30px;
  cursor: pointer;
  display: inline-block;
  top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    opacity: ${(props) => (props.clicked ? "0.2" : "1")};
}
  span {
    background-color: #706d57;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  span:nth-child(1) {
    width: 100%;
    height: 4px;
    display: block;
    top: 0px;
    left: 0px;

  }
  span:nth-child(2) {
    width: 100%;
    height: 4px;
    display: block;
    top: 13px;
    left: 0px;
  }
  span:nth-child(3) {
    width: 100%;
    height: 4px;
    display: block;
    bottom: 0px;
    left: 0px;
  }
`

const MyFloat = styled.div`
  display: inline-block;
`

const List = styled.ul`
  position: fixed;
  right: 20px;
  padding-bottom: 20px;
  bottom: 80px;
  z-index: 100;
  text-align: end;
  line-height: 1.5em;
  letter-spacing: 0.2em;
  list-style-type: none;
  margin: 0;
`

const ListItem = styled.li`
  display: ${(props) => (props.clicked ? "block" : "none")};
  list-style: none;
  font-size: 24px;
  margin-bottom: 10px;
  ::first-letter {
    text-shadow: 1px 1px 2px #f9efac;
    color: #efd318;
    transition: color 0.5s;
  }
  :hover {
    visibility: visible !important;
    opacity: 1 !important;
  }
`

export default Footx
