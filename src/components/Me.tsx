import React from "react"
import styled from "styled-components"

const Me = () => {
  return (
    <Cta>
      <Title>Developing your ideas front and back ...</Title>
      <Intro>
        Hello, I'm Daniel McDermott, a full stack web designer / developer in
        the United States for hire. I create full-stack web apps using the
        latest tools like React, Gatsby and GraphQL combined with PostgeSQL.
      </Intro>
      <CtaBtns>
        <ButtonFlex>
          <Btn>Projects</Btn>
          <Btn>Contact</Btn>
        </ButtonFlex>
      </CtaBtns>
    </Cta>
  )
}

const Cta = styled.div`
  top: 75px;
  z-index: 5;
  position: fixed;
  width: 75vw;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
`

const Title = styled.h1`
  color: #fff8f1;
  margin: 0 auto;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
`

const Intro = styled.h3`
  padding-top: 15em;
  color: #fff8f1;
  margin: 0 auto;
  font-weight: 100;
  text-align: left;
`

const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CtaBtns = styled.div`
  padding: 3em 3em;
`

const Btn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  text-indent: 0px;
  border: 1px solid #000;
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
