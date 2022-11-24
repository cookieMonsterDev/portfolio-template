import React from 'react';
import styled from 'styled-components';
import Intro from '../components/Intro/Intro';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';
import About from '../components/About/About';

const MainPage = () => {
  return (
    <Container>
      <Span>
        <Intro />
      </Span>
      <Span id="about"><About /></Span>
 
        <Experience id="experience"/>
   
      <Projects />
      <Span id="contact">
        <ContactMe />
      </Span>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  background-color: #0a192f;
  padding: 0 10rem;

  @media only screen and (max-width: 48em) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 25em) {
    padding: 0 1rem;
  }
`;

const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0;
  color: white;
`;
