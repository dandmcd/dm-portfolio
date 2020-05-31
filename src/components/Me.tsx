import React from "react"
import ProjectsBackground from "../components/Projects/ProjectsBackground"
import styled, { keyframes } from "styled-components"

const Me = () => {
  return (
    <Cta>
      <div>
        <Title>
          Developing your ideas<FadeTitle> front </FadeTitle>{" "}
          <FadeTitleB>and</FadeTitleB> <FadeTitleC>back ...</FadeTitleC>
        </Title>
      </div>
      <Wrapper>
        <ProjectsBackground />
        <IntroSection>
          <Intro>
            Hello, I'm Daniel McDermott, a full stack web designer / developer
            in the United States for hire. I create full-stack web apps using
            the latest tools like React, Gatsby and GraphQL combined with
            PostgeSQL.
          </Intro>
        </IntroSection>
        <CtaBtns>
          <ButtonFlex>
            <Btn>Projects</Btn>
            <Btn>Contact</Btn>
          </ButtonFlex>
        </CtaBtns>
      </Wrapper>
    </Cta>
  )
}

const Cta = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  animation: ${fadeIn} 16s;
`

const Intro = styled.h3`
  position: relative;
  color: #fff8f1;
  font-weight: 100;
  text-align: left;
  margin: 0 auto;
  padding 1em 0;
`

const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  margin: 0 auto;
`

const CtaBtns = styled.div`
  position: relative;
  animation: ${fadeIn} 10s;
  padding: 3em 3em;
`

const Btn = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 0.0625rem solid #80868b;
  border-radius: 20px;
  text-indent: 0px;
  display: inline-block;
  color: #666666;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  text-decoration: none;
  text-align: center;
`

export default Me
