import React from "react"
import Projects from "../components/Projects/Projects"
import ProjectsBackground from "../components/Projects/ProjectsBackground"
import SEO from "../components/SEO"

const ProjectsPage = () => {
  return (
    <>
      <SEO title="projects" description="Projected developed by Daniel" />
      <Projects />
    </>
  )
}

export default ProjectsPage
