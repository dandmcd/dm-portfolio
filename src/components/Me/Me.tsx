import React, { FC } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImageProps } from "gatsby-plugin-image"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import email from "../../images/message.png"
import {
  Cta,
  Header,
  Wrapper,
  Title,
  FadeTitle,
  FadeTitleB,
  FadeTitleC,
  IntroSection,
  IntroBox,
  Intro,
  MeImg,
  CtaBtns,
  BlogEntry,
  BlogSpan,
  MediaIcons,
  MediaIcon,
  Social,
} from "./style"
import { CommonButton } from "../../css/styledCommon"

interface GetCta {
  file: {
    childImageSharp: {
      gatsbyImageData: GatsbyImageProps
    }
  }
  lastEntry: {
    edges: {
      node: {
        slug: string
        title: string
      }
    }[]
  }
}

const getCta = graphql`
  {
    file(relativePath: { eq: "hero/computerdan.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          transformOptions: { cropFocus: CENTER }
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
    lastEntry: allContentfulDmPortfolioBlog(
      sort: { order: DESC, fields: createdAt }
      limit: 1
    ) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

const Me: FC = (): JSX.Element => {
  const data: GetCta = useStaticQuery(getCta)
  const lastEntry = data.lastEntry.edges[0].node

  return (
    <Cta>
      <Header>
        <Title>Bringing ideas to life</Title>
        <Title>
          <FadeTitle>back</FadeTitle>
          <FadeTitleB> to</FadeTitleB> <FadeTitleC> front</FadeTitleC>
        </Title>
      </Header>
      <Wrapper>
        <IntroSection>
          <Social>
            <MediaIcons>
              <a
                href="https://github.com/givionte"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MediaIcon
                  as={MediaIcon}
                  src={github}
                  width="32"
                  height="32"
                  alt="Github"
                ></MediaIcon>
              </a>
              <Link to="/contact">
                <MediaIcon
                  as={MediaIcon}
                  src={email}
                  width="32"
                  height="32"
                  alt="Email"
                ></MediaIcon>
              </Link>
              <a
                href="https://www.linkedin.com/in/dandmcd/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MediaIcon
                  as={MediaIcon}
                  src={linkedin}
                  width="32"
                  height="32"
                  alt="LinkedIn"
                ></MediaIcon>
              </a>
            </MediaIcons>
            <MeImg
              as={MeImg}
              alt="Img"
              image={data.file.childImageSharp.gatsbyImageData}
              imgStyle={{
                objectFit: "contain",
              }}
            />
          </Social>
          <IntroBox>
            <Intro>
              Hello, I am Daniel McDermott, a software developer majoring in
              Computer Science. I create full-stack apps using multiple
              programming languages including TypeScript and Python, along with
              many of the latest tools including React and GraphQL.
            </Intro>
          </IntroBox>
        </IntroSection>

        <CtaBtns>
          <Link to="/projects">
            <CommonButton>View My Projects</CommonButton>
          </Link>
        </CtaBtns>
        <BlogEntry>
          Latest Blog Entry:{" "}
          <BlogSpan>
            <Link to={`/blog/${lastEntry.slug}`}>{lastEntry.title}</Link>
          </BlogSpan>
        </BlogEntry>
      </Wrapper>
    </Cta>
  )
}

export default Me
