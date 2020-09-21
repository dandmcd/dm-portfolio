import React, { FC } from "react"
import Projects from "../components/Projects/Projects"
import SEO from "../components/SEO"

const ProjectsPage: FC = (): JSX.Element => {
  return (
    <>
      <SEO title="projects" description="Projected developed by Daniel" />
      <Projects />
    </>
  )
}

export default ProjectsPage
