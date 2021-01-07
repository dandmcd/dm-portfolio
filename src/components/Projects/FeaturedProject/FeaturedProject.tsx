import React, { FC } from "react"

import { NodeProps } from "../ProjectsList/ProjectsList"
import {
  Figure,
  FigCaption,
  ProjectTitle,
  FeaturedSpan,
  ProjectViewMore,
  ProjectLink,
  ProjectImg,
  ProjectDescription,
} from "./style"

const FeaturedProject: FC<NodeProps> = ({ node }): JSX.Element => {
  const {
    title,
    slug,
    featured,
    preview: { preview },
    featuredImages,
  } = node
  return (
    <>
      <ProjectLink to={`/project/${slug}`}>
        <Figure>
          <FigCaption>
            <ProjectTitle>
              <FeaturedSpan>Featured Project:</FeaturedSpan> {title}
            </ProjectTitle>
            <ProjectDescription>{preview}</ProjectDescription>
            <ProjectViewMore>View More</ProjectViewMore>
          </FigCaption>
          <div>
            <ProjectImg as={ProjectImg} fixed={featuredImages[0].fixed} />
          </div>
        </Figure>
      </ProjectLink>
    </>
  )
}

export default FeaturedProject
