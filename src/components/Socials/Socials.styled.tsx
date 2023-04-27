import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Anim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContainerLeft = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  left: 3.5rem;
  z-index: 998;
  background-color: transparent;
  opacity: 0;
  animation: ${Anim} 700ms ease-in-out 2000ms forwards;

  @media only screen and (max-width: 70rem) {
    visibility: hidden;
  }
`;

export const ContaineRight = styled(ContainerLeft)`
  max-width: 1.8rem;
  left: auto;
  right: 3.5rem;
  background-color: transparent;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Link = styled.a`
  cursor: pointer;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: var(--primary);
    transition: all 300ms;

    &:hover {
      transform: translateY(-0.3rem);
      fill: var(--neon);
    }
  }
`;

export const EmailLink = styled.a`
  padding: 0 0 1rem 0.1rem;
  font-family: "Roboto Mono", monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  writing-mode: vertical-lr;
  transition: all 300ms;

  &:hover {
    color: var(--neon);
    transform: translateY(-0.3rem);
  }
`;

export const Stripe = styled.div`
  position: relative;
  height: 8rem;
  width: 0.12rem;
  background-color: var(--primary);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--neon);
    transform: translateY(100%);
    transition: all 300ms;
  }
`;

export const StripeLeft = styled(Stripe)`
  ${ContainerLeft}:hover & {
    &:before {
      transform: translateY(0);
    }
  }
`;

export const StripeRigth = styled(Stripe)`
  ${ContaineRight}:hover & {
    &:before {
      transform: translateY(0);
    }
  }
`;
