import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../../constants/links"
import { Transition } from "react-transition-group"

import {
  Tooltip,
  TooltipText,
  Float,
  Hamburger,
  MyFloat,
  List,
  ListItem,
} from "./style"
import { TransitionProps } from "react-transition-group/Transition"

const Footer = ({ location }: { location: Location }): JSX.Element => {
  const [clicked, setIsClicked] = useState(false)
  const toggleMenu = () => {
    setIsClicked((prevClick) => !prevClick)
  }
  return (
    <Transition in={clicked} timeout={500}>
      {(state: { state: TransitionProps }) => (
        <>
          <Tooltip>
            <Float state={state} onClick={toggleMenu} id="menu-share">
              <MyFloat>
                <Hamburger as={Hamburger} clicked={clicked}>
                  <span></span>
                  <span></span>
                  <span></span>
                </Hamburger>
              </MyFloat>
            </Float>
            <TooltipText as={TooltipText} location={location}>
              Menu
            </TooltipText>
          </Tooltip>
          {clicked ? (
            <List as={List} location={location} state={state}>
              {links.map((item, index) => {
                return (
                  <ListItem as={ListItem} clicked={clicked} key={index}>
                    <Link to={item.path}>{item.text}</Link>
                  </ListItem>
                )
              })}
            </List>
          ) : null}
        </>
      )}
    </Transition>
  )
}

export default Footer
