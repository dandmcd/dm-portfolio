import React from "react"
import HeroBackground from "./HeroBackground"
import styled, { keyframes } from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const getImage = graphql`
  query {
    file(relativePath: { eq: "hero/computerdan.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 150, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Me = () => {
  const data = useStaticQuery(getImage)
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

          <Intro>
            Hello, I'm Daniel McDermott, a full stack web designer / developer
            in the United States for hire. I create full-stack web apps using
            the latest tools like React, Gatsby and GraphQL combined with
            PostgeSQL.
          </Intro>
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
        </CtaBtns>
      </Wrapper>
      <Footer></Footer>
    </Cta>
  )
}

const Cta = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: 0 1fr 0;
  grid-template-rows: auto 8em 1fr auto;
  width: 100vw;
  @media (min-width: 600px) {
    grid-template-columns: 20px 1fr 20px;
  }
  :before {
    content: "";
    grid-column: 1/-1;
    grid-row: 1/3;
    background-color: #dfc412;
  }
  /* margin: 0 auto; */
`

const Header = styled.header`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  z-index: 50;
  color: #fff;
  background-color: #dfc412;
  padding: 35px 20px;
`

const Footer = styled.footer`
  grid-column: 2/3;
  grid-row: -1;
  padding: 20px;
`

const fadeIn = keyframes`
    0% { opacity: 0; }

    50% {opacity: 0;}
    100%   { opacity: 1; }
`

const Wrapper = styled.main`
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  grid-column-gap: 5px;
  min-height: 50vh;
  margin: 0 auto;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px) brightness(80%);
  z-index: 50;
  width: 70vw;
  animation: ${fadeIn} 8s;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1824px) {
    width: 50vw;
  }
`

const Title = styled.h1`
  animation: ${fadeIn} 2s;
  line-height: 1.2;
  background-color: #dfc412;
  position: relative;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
  @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {
    font-size: 60px;
  }
`

const FadeTitle = styled.span`
  animation: ${fadeIn} 4s;
`

const FadeTitleB = styled.span`
  animation: ${fadeIn} 6s;
`

const FadeTitleC = styled.span`
  animation: ${fadeIn} 7s;
`

const IntroSection = styled.div`
  display: grid;
  grid-column-gap: 1em;
`

const Intro = styled.h2`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  color: #fff8f1;
  font-weight: 100;
  text-align: left;
  margin: 0 auto;
  padding: 1em 1em;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 /3;
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: 1824px) {
    font-size: 28px;
  }
`

const MeImg = styled(Img)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-radius: 50%;
  border: 4px solid #f5e269;
  place-self: center center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-column: 1 / 3;
  }
`

const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`

const CtaBtns = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  position: relative;
  animation: ${fadeIn} 7s;
  padding: 3em 3em;
`

const Btn = styled.button`
  background-color: rgba(238, 238, 222, 0.8);
  border: 0.0625rem solid #80868b;
  border-radius: 14px;
  text-indent: 0px;
  min-width: 156px;
  width: 230px;
  display: inline-block;
  color: #414033;
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 120px;
  }
`

const Btn2 = styled(Btn)`
  margin-left: 0.2em;
`

export default Me
