import React, { memo, FunctionComponent } from "react"
import { Link } from "gatsby"
import { FluidObject } from "gatsby-image"

import {
  Container,
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
      fluid: FluidObject[]
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
  const image = images[0].fluid
  return (
    <Container>
      <Grid>
        <BlogImg as={BlogImg} fluid={image} />
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
    </Container>
  )
}

export default memo(BlogPost)
