import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
`

export const FeaturedProjectContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #fdfae5;
  position: relative;
  color: #414033;
  margin: 0 auto;
  text-align: center;
`

export const ProjectsContainer = styled.div`
  display: grid;
  z-index: 2;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  row-gap: 20px;
  column-gap: 5px;
  align-items: center;
  justify-items: center;
  max-width: 900px;
  padding: 1em 0;
  left: 50%;
  transform: translateX(-50%);
`
