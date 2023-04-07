import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Button } from "@mui/material";

const Anim = keyframes`
  0% {
    scale: 0;
    opacity: 0;
    box-shadow: none;
  }
  90% {
    scale: 1;
    opacity: 1;
  }
  100% {
    box-shadow: 0 0 1rem var(--neon);
  }
`;

export const DialogContainer = styled.dialog`
  inset: 0;
  border: none;
  padding: 2rem;
  position: absolute;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: var(--secondary);
  border: 0.1rem solid var(--neon);
  box-shadow: 0 0 1rem var(--neon);
  color: var(--primary);

  animation: ${Anim} 700ms ease-out;

  display: grid;
  align-items: center;
  grid-template-areas:
    "title gif gif"
    "content gif gif"
    "homeButton gif gif";

  a {
    grid-area: homeButton;
    text-decoration: none;
  }

  > h1 {
    grid-area: title;
    justify-self: center;
    margin: 0;
    font-size: 5rem;
    color: var(--primary);
  }

  img {
    grid-area: gif;
    width: 18rem;
    height: 18rem;
  }

  @media only screen and (max-width: 28rem) {
    max-width: 80vw;
    padding: 1rem;
    grid-template-areas:
      "title"
      "gif"
      "content"
      "homeButton";

    a,
    img {
      justify-self: center;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 56rem) {
    max-width: 80vw;
    padding: 1.5rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: content;
  padding: 1rem 0;

  p {
    margin-bottom: 1rem;

    &:nth-of-type(1) {
      font-size: 1.3rem;
    }

    &:nth-of-type(2) {
      font-family: "Roboto Mono", monospace;
      font-weight: 800;
      color: var(--neon);
    }
  }

  @media only screen and (max-width: 28rem) {
    p {
      text-align: center;
    }
  }
`;

