import React from "react"
import { Link } from "gatsby"
import links from "../constants/links"

const Navbar = () => {
  return (
    <div>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index} className="text-right">
              <Link to={item.path}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
