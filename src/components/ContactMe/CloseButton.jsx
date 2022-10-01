import React from 'react'
import styled from 'styled-components'

const CloseButton = (props) => {
  return (
    <Container>
      <Button onClick={props.close}/>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 48em) {
    height: 5rem;
  }
`;

const Button = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;

  &:before, &:after {
    position: absolute;
    content: '';
    height: 0.2rem;
    width: 2.5rem;
    top: 45%;
    right: 0;
    border-radius: 0.5em;
    background-color: #0ee3b5;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export default CloseButton