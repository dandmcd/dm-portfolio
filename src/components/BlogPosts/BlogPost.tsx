import React, { memo } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const BlogPost = ({ blog }) => {
  console.log(blog)
  const {
    slug,
    title,
    images,
    previewText: { previewText },
    updatedAt,
  } = blog
  const image = images[0].fluid
  console.log(image)
  return (
    <Container>
      <Grid>
        <BlogImg fluid={image} />
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

const Container = styled.div`
  max-width: 1100px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 3fr;
  margin-bottom: 1em;
`

const BlogImg = styled(Img)`
  grid-column: 1 / 2;
  max-width: 200px;
`

const TextFields = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 1fr 1fr 2 29px;
`
const Title = styled.h2`
  margin: 0.1em 0 0 0.5em;
  letter-spacing: 1px;
`

const UpdatedAt = styled.h5`
  color: #706d57;
  margin: 0.1em 0 0 1em;
`

const Preview = styled.h4`
  font-weight: 400;
  padding: 0.3em 0.5em 0.5em 1em;
`

const ViewMore = styled.h2`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0 3em 0 0;
  font-weight: 200;
  text-align: right;
`

export default memo(BlogPost)
