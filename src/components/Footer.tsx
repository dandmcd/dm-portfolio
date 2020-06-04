import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import styled, { keyframes } from "styled-components"
import { Transition } from "react-transition-group"
import email from "../images/e-mail.png"

const Footer = ({ location }) => {
  const [clicked, setIsClicked] = useState(false)

  const toggleMenu = () => {
    setIsClicked(clicked === false ? true : false)
    console.log(clicked)
  }

  return (
    <Transition in={clicked} timeout={500}>
      {(state) => (
        <>
          <Tooltip>
            <Email src={email} state={state} alt="Email" />
            <TooltipText clicked={clicked} location={location}>
              Contact Me
            </TooltipText>
          </Tooltip>
          <TooltipMenu>
            <Float state={state} onClick={toggleMenu} id="menu-share">
              <MyFloat>
                <Hamburger clicked={clicked}>
                  <span></span>
                  <span></span>
                  <span></span>
                </Hamburger>
              </MyFloat>
            </Float>
            <TooltipText clicked={clicked} location={location}>
              Menu
            </TooltipText>
          </TooltipMenu>
          <List location={location} state={state}>
            {links.map((item, index) => {
              return (
                <ListItem clicked={clicked} key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </ListItem>
              )
            })}
          </List>
        </>
      )}
    </Transition>
  )
}

const Tooltip = styled.div`
  position: absolute;
  display: inline-block;
  width: 40px;
  bottom: 190px;
  right: 65px;
  z-index: 1000;
`

const TooltipMenu = styled(Tooltip)`
  bottom: 140px;
`

const TooltipText = styled.span`
  visibility: hidden;
  width: 100px;
  background-color: ${(props) =>
    props.location.pathname === "/" ? "#f9efac" : "#483f06"};
  color: ${(props) =>
    props.location.pathname === "/" ? "#483f06" : "#fdfae5"};

  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 5000;
  ${Tooltip}:hover & {
    visibility: ${(props) => (props.clicked ? "hidden" : "visible")};
  }
  ::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%; 
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
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

const Float = styled.a`
  position: fixed;
  width: ${({ state }) => (state === "entered" ? "20px" : "60px")};
  height: ${({ state }) => (state === "entered" ? "20px" : "60px")};
  bottom: ${({ state }) => (state === "entered" ? "60px" : "40px")};
  right: ${({ state }) => (state === "entered" ? "40px" : "20px")};
  background-color: #efd318;
  border-radius: 14px;
  text-align: center;
  cursor: pointer;
  box-shadow: 2px 2px 3px #483f06;
  z-index: 1000;
  animation: ${swing} 0.5s ease;
  animation-delay: 2s;
  animation-iteration-count: 1;
  transition: background-color 0.5s;
  #menu-share + ul {
    visibility: hidden;
  }
  :hover {
    background-color: #f5e269;
  }
`

const FloatEmail = styled(Float)`
  width: 50;
  height: 50;
`

const Email = styled.img`
  position: fixed;
  width: 40px;
  bottom: 120px;
  right: 30px;
  z-index: 100;
  cursor: pointer;
  opacity: ${({ state }) => (state === "entered" ? 0 : 1)};
  animation: ${swing} 0.5s ease;
  animation-delay: 2s;
  animation-iteration-count: 1;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
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

  span {
    background-color: #414033;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    opacity: ${(props) => (props.clicked ? "0" : "1")};
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
  border-radius: 14px;
  padding: 0 0.2em 0 0.2em;
  bottom: 90px;
  z-index: 100;
  text-align: end;
  line-height: 1.5em;
  letter-spacing: 0.2em;
  list-style-type: none;
  margin: 0;
  transition: 0.5s;
  backdrop-filter: blur(5px) brightness(110%);
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  a {
    color: ${(props) =>
      props.location.pathname === "/" ? "#fef8f5" : "#414033"};
    text-decoration: none;
  }
`

const ListItem = styled.li`
  display: ${(props) => (props.clicked ? "block" : "none")};
  list-style: none;
  font-size: 24px;
  font-weight: 400;
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

export default Footer
