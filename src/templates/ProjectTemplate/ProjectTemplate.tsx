/* eslint-disable react/display-name */
import React, { FC, Fragment } from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from "gatsby-source-contentful/rich-text"
import { FluidObject } from "gatsby-image"

import SEO from "../../components/SEO"

import {
  ContentfulImg,
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
        fluid: FluidObject[]
      }[]
      slug: string
    }
  }
}

export const query = graphql`
  query($slug: String!) {
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
        fluid {
          ...GatsbyContentfulFluid
        }
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
            <img width="320" src={node.data.target.file.url} />
            <ImgCaption>{node.data.target.title}</ImgCaption>
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
              <GitLink>
                <a href={githubLink} rel="noopener noreferrer" target="_blank">
                  View Github
                </a>
              </GitLink>
              <DemoLink>
                <a href={demoLink} rel="noopener noreferrer" target="_blank">
                  See Live App
                </a>
              </DemoLink>
            </ViewButtons>
          </LinkSection>
          <PackageBox>Tech Stack:</PackageBox>
          <TechTags>
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
