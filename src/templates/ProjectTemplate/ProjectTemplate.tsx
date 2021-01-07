import React, { FC, Fragment } from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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

interface GetProjects {
  data: {
    target: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
    contentfulDmPortfolioProjects: {
      title: string
      description: {
        json: any
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
        json
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
    description: { json },
    technology,
    preview: { preview },
    githubLink,
    demoLink,
    images,
  } = data.contentfulDmPortfolioProjects

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <ContentfulImg>
            <img width="320" src={node.data.target.fields.file["en-US"].url} />
            <ImgCaption>{node.data.target.fields.title["en-US"]}</ImgCaption>
          </ContentfulImg>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => (
        <ContentfulHeading>{children}</ContentfulHeading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <ContentfulP>{children}</ContentfulP>
      ),
    },
  }
  return (
    <Container>
      <SEO title={title} description={preview} />
      <Grid>
        <ContentSide>{documentToReactComponents(json, options)}</ContentSide>
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
