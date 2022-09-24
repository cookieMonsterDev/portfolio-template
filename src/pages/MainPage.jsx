import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Container>
      <Span>Into</Span>
      <Span>About me</Span>
      <Span id="experience">Experience</Span>
      <Span>Projects</Span>
      <Span id="contact">Contact</Span>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  background-color: #0a192f;
  padding: 0 10rem;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  color: white;
`;
