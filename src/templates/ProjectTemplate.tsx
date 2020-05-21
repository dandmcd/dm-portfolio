import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import SEO from "../components/SEO"

const ProjectTemplate = ({ data }) => {
  console.log(data)
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
              {technology.map((tag) => (
                <>
                  <Tag key={tag} disabled>
                    {tag}
                  </Tag>
                  <TagLine />
                </>
              ))}
            </TagList>
          </TechTags>
        </SideBar>
      </Grid>
    </Container>
  )
}

const ContentfulImg = styled.div`
  text-align: center;
`

const ImgCaption = styled.p`
  margin: 0 auto;
`

const ContentfulHeading = styled.h2`
  border-left: 3px solid #7b6c0a;
  padding: 0 0 0 0.2em;
  margin: 0 auto 0 0.5em;
`

const ContentfulP = styled.p`
  padding: 0 0.5em 0.5em 1em;
`

const Container = styled.div`
  max-width: 1100px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 340px);
  grid-template-rows: auto;
  width: 100vw;
  height: 100vh;
`

const ContentSide = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: #f5e269;
  padding: 0.4rem;
`
const ProjectTitle = styled.h1`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 52px;
  letter-spacing: 2px;
`

const SideBar = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-left: 0.5px solid #c6c4b6;
  padding: 0.4rem;
`
const LinkSection = styled.div``

const SmallTitle = styled.h4`
  font-weight: 400;
  text-align: center;
`

const Preview = styled.h5`
  color: #706d57;
  margin: 3em;
  padding: 0.5em;
  border-left: 5px solid #414033;
  text-align: left;
  font-weight: 400;
`

const ViewButtons = styled.div`
  text-align: center;
  margin: 0 auto;
`

const GitLink = styled.button`
  margin: 0.3rem auto;
  background-color: rgba(255, 255, 255, 0.8);
  border: 0.0625rem solid #80868b;
  border-radius: 20px;
  width: 230px;
  text-indent: 0px;
  display: inline-block;
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  text-decoration: none;
  text-align: center;
`

const DemoLink = styled(GitLink)``

const PackageBox = styled.h2`
  margin-top: 2rem;
  text-align: center;
`

const TechTags = styled.div`
  margin: 0 auto;
  text-align: center;
`
const TagList = styled.ul`
  margin: 0 auto;
  padding: 0;
  hr:last-child {
    display: none;
  }
`

const Tag = styled.h4`
  font-weight: 600;
`

const TagLine = styled.hr`
  background: #8e8a6e;
  border: 0;
  height: 0.75px;
  width: 90px;
`

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

export default ProjectTemplate
