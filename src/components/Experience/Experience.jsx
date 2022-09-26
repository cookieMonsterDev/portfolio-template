import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <Container>
      <Box1 />
      <Box2 />
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 150rem;
`;

const Box1 = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: red;
`;

const Box2 = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: yellow;
`;
