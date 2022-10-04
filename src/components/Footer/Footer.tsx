import React, { useState } from "react"
import { Link } from "gatsby"
import links from "../../constants/links"

import { Transition } from "react-transition-group"
import email from "../../images/e-mail.png"

import {
  Tooltip,
  TooltipMenu,
  TooltipText,
  Float,
  Hamburger,
  MyFloat,
  List,
  ListItem,
  TooltipContact,
} from "./style"
import { TransitionProps } from "react-transition-group/Transition"

const Footer = ({ location }: { location: Location }): JSX.Element => {
  const [clicked, setIsClicked] = useState(false)
  const toggleMenu = () => {
    setIsClicked(clicked === false ? true : false)
  }
  return (
    <Transition in={clicked} timeout={500}>
      {(state: { state: TransitionProps }) => (
        <>
          <TooltipMenu>
            <Float state={state} onClick={toggleMenu} id="menu-share">
              <MyFloat>
                <Hamburger as={Hamburger} clicked={clicked}>
                  <span></span>
                  <span></span>
                  <span></span>
                </Hamburger>
              </MyFloat>
            </Float>
            <TooltipText as={TooltipText} clicked={clicked} location={location}>
              Menu
            </TooltipText>
          </TooltipMenu>
          <List as={List} location={location} state={state}>
            {links.map((item, index) => {
              return (
                <Link to={item.path}>
                  <ListItem as={ListItem} clicked={clicked} key={index}>
                    {item.text}
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </>
      )}
    </Transition>
  )
}

export default Footer
