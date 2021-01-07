import React, { FC } from "react"
import HeroBackground from "../HeroBackground"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImageFixedProps } from "gatsby-image"

import {
  Cta,
  Header,
  Footer,
  Wrapper,
  Title,
  FadeTitle,
  FadeTitleB,
  FadeTitleC,
  IntroSection,
  IntroBox,
  Intro,
  MeImg,
  ButtonFlex,
  CtaBtns,
  BlogEntry,
  BlogSpan,
  Btn,
  Btn2,
} from "./style"

interface GetCta {
  file: {
    childImageSharp: {
      fixed: GatsbyImageFixedProps
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
  query {
    file(relativePath: { eq: "hero/computerdan.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lastEntry: allContentfulDmPortfolioBlog(limit: 1) {
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
      <div>
        <HeroBackground className="div" />
      </div>
      <Header>
        <Title>
          Developing your ideas
          <FadeTitle>
            <br />
            front
          </FadeTitle>
          <FadeTitleB> and</FadeTitleB> <FadeTitleC> back ...</FadeTitleC>
        </Title>
      </Header>
      <Wrapper>
        <IntroSection>
          <MeImg
            fixed={data.file.childImageSharp.fixed}
            imgStyle={{
              objectFit: "contain",
            }}
          />
          <IntroBox>
            <Intro>
              Hello, I am Daniel McDermott, a full-stack software developer in
              the United States for hire. I create full-stack web apps using the
              latest tools like React, Typescript and Gatsby, backed with
              GraphQL and SQL.
            </Intro>
          </IntroBox>
        </IntroSection>

        <CtaBtns>
          <ButtonFlex>
            <Link to="/projects">
              <Btn>Projects</Btn>
            </Link>
            <Link to="/contact">
              <Btn2>Contact</Btn2>
            </Link>
          </ButtonFlex>
          <BlogEntry>
            Latest Blog Entry:{" "}
            <BlogSpan>
              <Link to={`/blog/${lastEntry.slug}`}>{lastEntry.title}</Link>
            </BlogSpan>
          </BlogEntry>
        </CtaBtns>
      </Wrapper>
      <Footer></Footer>
    </Cta>
  )
}

export default Me
