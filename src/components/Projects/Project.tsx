import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ project }) => {
  const { title, slug } = project

  return <Link to={`/project/${slug}`}>{title}</Link>
}

export default Project
