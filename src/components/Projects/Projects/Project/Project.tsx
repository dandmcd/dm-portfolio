import React, { FC } from "react"

import { NodeProps } from "../../ProjectsList/ProjectsList"

import {
  Figure,
  FigCaption,
  ProjectTitle,
  ProjectViewMore,
  ProjectLink,
  ProjectImg,
  ProjectDescription,
} from "./style"

const Project: FC<NodeProps> = ({ node }): JSX.Element => {
  const {
    title,
    slug,
    featured,
    preview: { preview },
    images,
  } = node

  return (
    <>
      <ProjectLink to={`/project/${slug}`}>
        <Figure>
          <FigCaption>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{preview}</ProjectDescription>
            <ProjectViewMore>View More</ProjectViewMore>
          </FigCaption>
          <div>
            <ProjectImg as={ProjectImg} fixed={images[0].fixed} />
          </div>
        </Figure>
      </ProjectLink>
    </>
  )
}

export default Project
