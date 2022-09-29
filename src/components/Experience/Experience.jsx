import { useState } from 'react';
import styled, { css } from 'styled-components';
import experience from '../../static/experienceData';
import LinkIcon from '@mui/icons-material/Link';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Experience = () => {
  const [active, setActive] = useState(experience[0]);

  console.log(experience[0]);

  return (
    <>
      <Title>Life path</Title>
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
        <Tab>
          <Header>
            <h1>{active.title}</h1>
            <a href={active.companyUrl}>
              <LinkIcon />
            </a>
          </Header>
          <Dates>{active.dates}</Dates>
          <ResponsibilitiesList>
            {active.responsibilities.map((i, j) => {
              return (
                <ResponsibilityItem>
                  <ArrowRightIcon />
                  <p>{i}</p>
                </ResponsibilityItem>
              );
            })}
          </ResponsibilitiesList>
        </Tab>
      </Container>
    </>
  );
};

export default Experience;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 65rem;
  max-height: 90vh;
  min-width: 35rem;

  @media only screen and (max-width: 48em) {
    flex-direction: column;
    max-width: 21rem;
    min-width: 20rem;
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
  text-align: left;
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

  > p {
    width: 100%;
    padding-left: 2rem;
  }
`;

const Tab = styled.div`
  min-width: 35rem;
  position: relative;
  flex: 5;
  height: 30rem;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #0a192f;

  @media only screen and (max-width: 48em) {
    min-width: 20rem;
  }
`;

const Header = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: #e7e6e1;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Heebo', sans-serif;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #8fa3cd;
  }

  svg:hover {
    fill: #0ee3b5;
    transition: all 700ms;
  }
`;

const Dates = styled.span`
  margin: 1rem 0;
  text-align: center;
  color: #8fa3cd;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
`;

const ResponsibilitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem;

  @media only screen and (max-width: 48em) {
    padding: 1rem 0 0 0;
  }
`;

const ResponsibilityItem = styled.li`
  display: flex;

  color: #8fa3cd;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Heebo', sans-serif;

  svg {
    width: 2rem;
    height: 2rem;
    fill: #0ee3b5;
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
