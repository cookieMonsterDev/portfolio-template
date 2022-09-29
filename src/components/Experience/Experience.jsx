import { useState } from 'react';
import styled, { css } from 'styled-components';
import experience from '../../static/experienceData';

const Experience = () => {
  const [active, setActive] = useState(experience[0]);

  console.log(experience[0]);

  return (
    <Container>
      <TabsList>
        {experience.map((item, index) => {
          return (
            <TabSwitch
              key={index}
              onClick={() => setActive(item)}
              isActive={active.title === item.title}
            >
              <p>{item.title}</p>
            </TabSwitch>
          );
        })}
      </TabsList>
      <Tab>{active.desc}</Tab>
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 65rem;

  @media only screen and (max-width: 48em) {
    flex-direction: column;
    max-width: 21rem;
  }
`;

const TabsList = styled.div`
  flex: 1;

  @media only screen and (max-width: 48rem) {
    min-height: 5.5rem;
    display: flex;
    overflow-x: auto;
  }
`;

const TabSwitch = styled.div`
  height: 4rem;
  min-width: 10rem;
  text-align: center;
  box-sizing: border-box;
  color: #8fa3cd;
  background-color: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;

  ${(props) =>
    props.isActive &&
    css`
      border-left: 2px solid #0ee3b5;
      background-color: #112240;
      color: #0ee3b5;

      @media only screen and (max-width: 48em) {
        border-left: 0;
        border-bottom: 2px solid #0ee3b5;
      }
    `}

  &:hover {
    background-color: #112240;
  }
`;

const Tab = styled.div`
  flex: 5;
  height: 30rem;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #0a192f;
`;
