import React from "react"
import Project from "./Project"

const ProjectsList = ({ projects }) => {
  return (
    <div>
      {projects.edges.map(({ node }) => {
        return <Project key={node.contentful_id} project={node} />
      })}
    </div>
  )
}

export default ProjectsList
