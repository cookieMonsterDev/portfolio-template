import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Main, SubTitle } from "@styles/common";

const Anim = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ProjectsTitle = styled(SubTitle)`
  animation: ${Anim} 700ms ease-in-out forwards;
  margin-bottom: 4rem;
`;

export const ProjectsMain = styled(Main)`
  padding-top: 8rem;

  @media only screen and (max-width: 70rem) {
    padding-top: 8rem;
  }

  @media only screen and (max-width: 28rem) {
    padding-top: 6rem;
  }
`;

export const ProjectContainer = styled.main`
  box-sizing: border-box;
  padding: 10rem 15vw;
  display: grid;
  grid-template-areas:
    "title title stats stats"
    "des des stats stats"
    "topics topics time time";

  @media only screen and (max-width: 70rem) {
    padding: 10rem 3rem 2rem 3rem;
  }

  @media only screen and (max-width: 28rem) {
    padding: 6rem 1rem 0 1rem;
    grid-template-areas:
      "title title"
      "des des"
      "topics topics"
      "stats stats";
  }
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: 2rem;
  font-weight: 600;
  color: var(--neon);
  text-transform: capitalize;
`;

export const Des = styled.p`
  grid-area: des;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--primary);
`;

export const Stats = styled.section`
  grid-area: stats;
  display: flex;
  padding: 0 2rem;
  gap: 2rem;

  @media only screen and (max-width: 28rem) {
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const List = styled.ul`
  grid-area: topics;
  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 13rem));
  padding: 0 0 0 2rem;
  list-style: none;
  gap: 0.7rem 3rem;
`;

export const Item = styled.li`
  position: relative;
  color: var(--neon);
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
  font-weight: 800;

  &:before {
    content: "\25B6";
    position: absolute;
    color: var(--neon);
    left: -1.9rem;
  }

  @media only screen and (max-width: 48.4rem) {
    font-size: 0.8rem;
  }
`;

export const TimeContainer = styled.section`
  grid-area: time;
  display: flex;
  flex-direction: column;
  padding: 3rem 0 0 1rem;
  gap: 1rem;
`;

export const Time = styled.p<{ time: string }>`
  margin: 0;
  font-size: 1.2rem;
  color: white;

  &::after {
    content: " ${({ time }) => time}";
    color: var(--neon);
  }
`;
