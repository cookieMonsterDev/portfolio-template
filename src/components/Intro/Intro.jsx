import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <Container>
      <Wellcome>Hi, my name is</Wellcome>
      <WhoAmI>Mykhailo.</WhoAmI>
      <SomeInfo>
        {` I’m a software engineer getting high from building wondeful apps.
          Currently I’m looking for a position of JS MERN stack web developer.
          This app is some kind of my portfolio that represents me so feel free to
          press `}
        <a>About</a>
        {` button to get to know me better)`}
      </SomeInfo>
      <AboutButton disableRipple href="#about">About me</AboutButton>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150rem;
`;

const Wellcome = styled.div`
  color: #0ee3b5;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
`;

const WhoAmI = styled.h1`
  margin: 0.6rem 0;
  max-width: 60rem;
  color: #c1cde8;
  font-size: 3rem;
  font-family: 'Heebo', sans-serif;
`;

const SomeInfo = styled.p`
  text-align: justify;
  max-width: 50rem;
  color: #819ad1;
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Heebo', sans-serif;

  > a {
    color: #0ee3b5;
  }
`;

const AboutButton = styled(Button)`
  width: 7rem;
  margin: 2rem 0;
  border-radius: 0;
  border: 0.15rem solid #0ee3b5;
  color: #0ee3b5;
  z-index: 1;

  &:active {
    background-color: rgba(14, 227, 181, 0.2)
  }

  @media only screen and (max-width: 48em) {
    margin: 2rem auto;
  }
`;
