import React, { memo, FunctionComponent } from "react"
import { Link } from "gatsby"
import { GatsbyImageProps } from "gatsby-plugin-image"

import {
  Grid,
  BlogImg,
  TextFields,
  Title,
  UpdatedAt,
  Preview,
  ViewMore,
} from "./style"

interface Props {
  blog: {
    slug: string
    title: string
    updatedAt: string
    images: {
      gatsbyImageData: GatsbyImageProps
    }[]
    previewText: {
      previewText: string
    }
  }
}

const BlogPost: FunctionComponent<Props> = ({ blog }) => {
  const {
    slug,
    title,
    images,
    previewText: { previewText },
    updatedAt,
  } = blog
  const image = images[0].gatsbyImageData
  return (
    <>
      <Grid>
        <BlogImg as={BlogImg} image={image} alt="test" />
        <TextFields>
          <Title>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </Title>
          <UpdatedAt>{updatedAt}</UpdatedAt>
          <Preview>{previewText}</Preview>
          <ViewMore>
            <Link to={`/blog/${slug}`}>View More</Link>
          </ViewMore>
        </TextFields>
      </Grid>
    </>
  )
}

export default memo(BlogPost)
