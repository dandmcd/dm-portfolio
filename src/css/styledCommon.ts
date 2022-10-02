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

export const CommonButton = styled.div`
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  --webkit-mask-image: none;
  width: 75%;
  position: relative;
  background-color: #dfc412;
  color: #414033;
  margin: 0 auto;
  outline: none;
  border-radius: 999px;
  border: 0 solid;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  min-width: 156px;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1rem 0;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  text-align: center;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: background-color 0.6s ease;
  &:before {
    border: 0 solid;
    box-sizing: border-box;
    --thickness: 4px;
    border: var(--thickness) solid #483f06;
    border-radius: 999px;
    content: "";
    inset: calc(var(--thickness) * -1);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: scale(1.3);
    transition: transform 0.2s, opacity 0.2s;
  }
  &:hover:before {
    opacity: 1;
    transform: scale(1);
  }
  &:hover {
    background-color: transparent;
    color: #414033;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 220px;
  }
`
