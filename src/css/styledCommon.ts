import styled from "styled-components"

export const CommonTitle = styled.h1`
  line-height: 1.2;
  position: relative;
  color: #414033;
  margin: 0 auto;
  padding: 0.1em 0 0.1em 0;
  font-weight: 800;
  text-align: center;
  font-size: 72px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 60px;
  }
`

export const CommonButton = styled.button`
  background-color: rgba(250, 249, 249, 0.8);
  border: 2px solid #414033;
  border-radius: 1em;
  text-indent: 0px;
  color: #414033;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  text-decoration: none;
  position: relative;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: rgba(238, 238, 222, 0.5);
  }
`
