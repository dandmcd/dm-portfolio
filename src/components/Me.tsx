import React from "react"
import HeroBackground from "./HeroBackground"
import styled, { keyframes } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
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
      <Header>
        <Title>
          Developing your ideas
          <FadeTitle>
            <br />
            front{" "}
          </FadeTitle>{" "}
          <FadeTitleB>and</FadeTitleB> <FadeTitleC>back ...</FadeTitleC>
        </Title>
      </Header>
      <HeroBackground className="div" />
      <Wrapper>
        <div>
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

            <CtaBtns>
              <ButtonFlex>
                <Btn>Projects</Btn>
                <Btn>Contact</Btn>
              </ButtonFlex>
            </CtaBtns>
          </IntroSection>
        </div>
      </Wrapper>
      <Footer>Footer</Footer>
    </Cta>
  )
}

const Cta = styled.div`
  display: grid;
  grid-template-columns: 0 1fr 0;
  grid-template-rows: auto 8em 1fr auto;
  @media (min-width: 600px) {
    grid-template-columns: 20px 1fr 20px;
  }
  :before {
    content: "";
    grid-column: 1/-1;
    grid-row: 1/3;
    background-color: #063;
  }
  /* margin: 0 auto; */
`

const Header = styled.header`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  color: #fff;
  background-color: #063;
  padding: 35px 20px;
`

const Wrapper = styled.main`
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  min-height: 50vh;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;
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

const Title = styled.h1`
  animation: ${fadeIn} 2s;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  background-color: #dfc412;
  position: relative;
  color: #414033;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

const FadeTitle = styled.span`
  animation: ${fadeIn} 6s;
`

const FadeTitleB = styled.span`
  animation: ${fadeIn} 8s;
`

const FadeTitleC = styled.span`
  animation: ${fadeIn} 10s;
`

const IntroSection = styled.div`
  width: 50vw;
  margin: 0 auto;
  animation: ${fadeIn} 16s;
  border-radius: 14px;
  backdrop-filter: blur(5px) brightness(80%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const Intro = styled.h3`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  color: #fff8f1;
  font-weight: 100;
  text-align: left;
  margin: 0 auto;
  padding: 1em 0;
`

const MeImg = styled(Img)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-radius: 50%;
  border: 2px solid yellow;
  place-self: center center;
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
  animation: ${fadeIn} 10s;
  padding: 3em 3em;
`

const Btn = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 0.0625rem solid #80868b;
  border-radius: 14px;
  text-indent: 0px;
  width: 230px;
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

export default Me
