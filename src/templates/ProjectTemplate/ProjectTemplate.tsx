/* eslint-disable react/display-name */
import React, { FC, Fragment } from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from "gatsby-source-contentful/rich-text"

import SEO from "../../components/SEO"

import {
  ContentfulImg,
  Img,
  ImgCaption,
  ContentfulHeading,
  ContentfulP,
  Container,
  Grid,
  ContentSide,
  ProjectTitle,
  SideBar,
  LinkSection,
  Preview,
  ViewButtons,
  GitLink,
  DemoLink,
  PackageBox,
  TechTags,
  TagList,
  Tag,
  TagLine,
} from "./style"
import { GatsbyImageProps } from "gatsby-plugin-image"

interface ContentfulProps {
  data: {
    target: {
      file: {
        url: string
      }
      title: string
    }
  }
}
interface GetProjects {
  data: {
    contentfulDmPortfolioProjects: {
      title: string
      description: {
        raw: string
      }
      technology: string[]
      updatedAt: string
      featured: boolean
      githubLink: string
      demoLink: string
      preview: {
        preview: string
      }
      images: {
        gatsbyImageData: GatsbyImageProps
      }[]
      slug: string
    }
  }
}

export const query = graphql`
  query ($slug: String!) {
    contentfulDmPortfolioProjects(slug: { eq: $slug }) {
      title
      description {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            file {
              url
            }
            __typename
          }
        }
      }
      technology
      updatedAt(formatString: "MMMM Do, YYYY")
      featured
      githubLink
      demoLink
      preview {
        preview
      }
      images {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      slug
    }
  }
`

const ProjectTemplate: FC<GetProjects> = ({ data }) => {
  const {
    title,
    description,
    technology,
    preview: { preview },
    githubLink,
    demoLink,
    images,
  } = data.contentfulDmPortfolioProjects

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: ContentfulProps) => {
        return (
          <ContentfulImg>
            <a
              href={node.data.target.file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img src={node.data.target.file.url} />
              <ImgCaption>{node.data.target.title}</ImgCaption>
            </a>
          </ContentfulImg>
        )
      },
      [BLOCKS.HEADING_2]: (
        node: ContentfulProps,
        children: ContentfulRichTextGatsbyReference
      ) => <ContentfulHeading>{children}</ContentfulHeading>,
      [BLOCKS.PARAGRAPH]: (
        node: ContentfulProps,
        children: ContentfulRichTextGatsbyReference
      ) => <ContentfulP>{children}</ContentfulP>,
    },
  }
  return (
    <Container>
      <SEO title={title} description={preview} />
      <Grid>
        <ContentSide>
          {description && renderRichText(description, options)}
        </ContentSide>
        <SideBar>
          <LinkSection>
            <ProjectTitle>{title}</ProjectTitle>
            <Preview>{preview}</Preview>
            <ViewButtons>
              <a href={githubLink} rel="noopener noreferrer" target="_blank">
                <GitLink>View Github</GitLink>
              </a>
              <a href={demoLink} rel="noopener noreferrer" target="_blank">
                <DemoLink>See Live App</DemoLink>
              </a>
            </ViewButtons>
          </LinkSection>

          <TechTags>
            <PackageBox>Tech Stack:</PackageBox>
            <TagList>
              {technology.map((tag, index) => (
                <Fragment key={index}>
                  <Tag as={Tag} key={tag} disabled>
                    {tag}
                  </Tag>
                  <TagLine />
                </Fragment>
              ))}
            </TagList>
          </TechTags>
        </SideBar>
      </Grid>
    </Container>
  )
}

export default ProjectTemplate
