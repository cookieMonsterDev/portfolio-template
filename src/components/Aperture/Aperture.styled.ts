import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-dark);
  box-shadow: 0 0 100px var(--neon);
`;

export const Aperture = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  background: var(--neon);
  border-radius: 50%;
  transform: rotate(0deg);
  transition: all 400ms ease-out;

  &:hover {
    background: var(--neon-light);
  }
`;

export const Blade = styled.div<{ deg: number }>`
  transform-origin: 150px 150px;
  transform: rotate(${({ deg }) => deg}deg);

  &::before {
    display: table;
    content: "";
    position: absolute;
    top: 100px;
    left: 17px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 160px solid var(--secondary);
    transform: rotate(90deg) translate(-20px, 0);
    transition: transform 400ms ease-out;
  }

  ${Aperture}:hover & {
    &::before {
      transform: rotate(90deg) translate(110px, 0px);
    }
  }
`;

const Anim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-position: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0;
  z-index: -1;

  ${Aperture}:hover & {
    animation: ${Anim} 700ms ease-out 400ms forwards;
  }
`;
