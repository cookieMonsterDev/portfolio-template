import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Rollout } from "@styles/animations";

export const Container = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-areas:
    "a  b"
    "c  b";
  margin-bottom: 8rem;
  opacity: 0;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${Rollout} 700ms ease-out;
    `}

  @media only screen and (max-width: 40.625rem) {
    grid-template-areas:
      "b  b"
      "a  a"
      "c  c";
  }
`;

export const InfoContainer = styled.div`
  grid-area: a;

  > p:last-child {
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  color: var(--primary);
  max-width: 40rem;
  margin: 0 0 2rem 0;
`;

export const Test = styled.div`
  justify-self: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: red;
  grid-area: b;

`;

export const List = styled.ul`
  grid-area: c;
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
