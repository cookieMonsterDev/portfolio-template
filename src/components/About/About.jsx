import React from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        <Info>
          <p>
            'Hi) My name is Mykhailo and I’m a software web developer. My
            interest in web development started year ago when I began my first
            work as QA Engineer, exactly there I understand that I can do more
            then just regular QA. I like "code", like digging in it this and
            high motivation to know as much as possible allowed me to dive into
            work with autotests. But I knew I can do better, so I started to
            look into our React code. With time my knowledge improved and now
            these are my skills:
          </p>
        </Info>
        <Skils>
          <li>
            <ArrowRightIcon />
            <p>{`JavaScript (ES6+)`}</p>
          </li>
          <li>
            <ArrowRightIcon />
            <p>{`TypeScript`}</p>
          </li>
          <li>
            <ArrowRightIcon />
            <p>{`NodeJS/TS`}</p>
          </li>
          <li>
            <ArrowRightIcon />
            <p>{`React`}</p>
          </li>
          <li>
            <ArrowRightIcon />
            <p>{`Styled-components`}</p>
          </li>
          <li>
            <ArrowRightIcon />
            <p>{`CSS3`}</p>
          </li>
          <li>
            <ArrowRightIcon />
            <p>{`HTML5`}</p>
          </li>
        </Skils>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 48em) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  margin-bottom: 2.5rem;
  text-align: center;
  color: #0ee3b5;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;

  @media only screen and (max-width: 48em) {
    font-size: 2rem;
  }
`;

const Info = styled.div`
  flex: 5;
  padding: 1rem;

  > p {
    text-align: justify;
    max-width: 50rem;
    color: #c1cde8;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Heebo', sans-serif;
  }
`;

const Skils = styled.ul`
  flex: 2;
  list-style: none;
  padding: 1rem 0 0 0;
  gap: 2rem;

  > li {
    display: flex;

    color: #8fa3cd;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto Mono', monospace;

    svg {
      width: 2rem;
      height: 2rem;
      fill: #0ee3b5;
    }

    > p {
      display: flex;
      align-items: center;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 48em) {
    padding: 0.3rem 0 0 1rem;
  }
`;
