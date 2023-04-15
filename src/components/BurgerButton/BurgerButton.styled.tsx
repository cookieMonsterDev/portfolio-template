import styled from "@emotion/styled";
import { keyframes } from "@mui/material";

export const Input = styled.input`
  position: absolute;
  appearance: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  inset: 0;
`;

const Anim = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Label = styled.label`
  height: 0.1rem;
  width: 2.3rem;
  top: 50%;
  left: 0;
  background-color: #8fa3cd;
  border-radius: 2rem;
  position: absolute;
  transition-duration: 0.25s;
  transition-delay: 0.25s;
  animation: ${Anim} 700ms ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: -0.75rem;
    left: 0;
    height: 0.1rem;
    width: 2.3rem;
    background-color: #8fa3cd;
    border-radius: 2rem;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0.75rem;
    left: 0;
    width: 2.3rem;
    height: 0.1rem;
    background-color: #8fa3cd;
    border-radius: 2rem;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }
`;

export const BurgerButton = styled.div`
  margin-right: 2rem;
  width: 2.3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;

  & ${Input}:checked + ${Label} {
    transition-duration: 0.1s;
    transition-delay: 0.25s;
    background: transparent;

    &:before {
      transition: top 0.25s, transform 0.25s 0.25s;
      top: 0;
      transform: rotateZ(-45deg);
      background-color: #0ee3b5;
    }

    &:after {
      transition: top 0.4s, transform 0.25s 0.25s;
      top: 0;
      transform: rotateZ(45deg);
      background-color: #0ee3b5;
    }
  }

  @media only screen and (min-width: 70rem) {
    visibility: hidden;
    display: none;
  }

  @media only screen and (max-width: 28rem) {
    margin-right: 2rem;
  }
`;
