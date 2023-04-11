import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const CardAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  90% {
    opacity: 1;
    transform: translateY(-2%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.article<{ inView: boolean }>`
  position: relative;
  padding: 1rem 1rem 1.5rem 1rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid var(--primary);
  background-color: var(--secondary);
  opacity: 0;

  &:hover {
    transform: translateY(-0.5rem);
    transition: all 500ms;
    border: 0.1rem solid var(--neon);
    box-shadow: 0 0 1rem var(--neon);
  }

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${CardAnim} 700ms ease-out;
    `}
`;

export const Links = styled.span`
  display: flex;
  justify-content: space-between;

  svg {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--primary);
    z-index: 500;
  }

  > svg {
    stroke: var(--neon);
  }
`;

export const BackLink = styled(Link)`
  position: absolute;
  inset: 0;
`;

export const Title = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  transition: all 500ms;

  ${Container}:hover & {
    color: var(--neon);
  }
`;

export const Desc = styled.p`
  color: rgb(170, 189, 230, 0.6);
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

export const Topics = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  gap: 0.6rem;
`;

export const Topic = styled.li`
  font-family: "Roboto Mono", monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-dark);
`
