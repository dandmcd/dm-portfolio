import { Link } from "gatsby"
import React, { FC } from "react"
import { NodeProps } from "../ProjectsList/ProjectsList"
import {
  Figure,
  FigCaption,
  ProjectTitle,
  FeaturedSpan,
  ProjectViewMore,
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
      <Link to={`/project/${slug}`}>
        <Figure>
          <FigCaption>
            <ProjectTitle>
              <FeaturedSpan>Featured Project:</FeaturedSpan> {title}
            </ProjectTitle>
            <ProjectDescription>{preview}</ProjectDescription>
            <ProjectViewMore>View More</ProjectViewMore>
          </FigCaption>
          <div>
            <ProjectImg
              as={ProjectImg}
              image={featuredImages[0].gatsbyImageData}
              alt={title}
            />
          </div>
        </Figure>
      </Link>
    </>
  )
}

export default FeaturedProject
