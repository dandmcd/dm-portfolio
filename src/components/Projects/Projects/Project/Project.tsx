import React, { FC } from "react"
import { Link } from "gatsby"
import { NodeProps } from "../../ProjectsList/ProjectsList"

import {
  Figure,
  FigCaption,
  ProjectTitle,
  ProjectViewMore,
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
      <Link to={`/project/${slug}`}>
        <Figure>
          <FigCaption>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{preview}</ProjectDescription>
            <ProjectViewMore>View More</ProjectViewMore>
          </FigCaption>
          <div>
            <ProjectImg
              as={ProjectImg}
              image={images[0].gatsbyImageData}
              alt={title}
            />
          </div>
        </Figure>
      </Link>
    </>
  )
}

export default Project
