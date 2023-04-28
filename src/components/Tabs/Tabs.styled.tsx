import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { Rollout } from "@styles/animations";

export const Container = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  opacity: 0;
  margin-bottom: 8rem;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${Rollout} 700ms ease-out;
    `}

  @media only screen and (max-width: 48.4rem) {
    grid-template-columns: none;
  }
`;

export const TabButtonsContainer = styled.div`
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 48.4rem) {
    flex-direction: row;
  }
`;

export const TabButton = styled.button<{ isActive?: boolean }>`
  position: relative;
  cursor: pointer;
  text-align: left;
  box-sizing: border-box;
  border: none;
  padding: 1rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 600;
  transition: all 700ms;
  background-color: var(--secondary);
  color: var(--primary);

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--neon);
      background-color: rgb(17, 34, 64);
    `}

  &:hover {
    color: var(--neon);
    background-color: rgb(17, 34, 64);
  }

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 0.1rem;
    background-color: rgb(35, 53, 84);
  }

  @media only screen and (max-width: 48.4rem) {
    text-align: center;
    min-width: 10rem;

    &:before {
      height: 0.1rem;
      width: 100%;
      top: auto;
      bottom: 0;
    }
  }
`;

export const Slider = styled.div<{ offset: number; length: number }>`
  position: absolute;
  height: ${({ length }) => length}px;
  left: 0;
  top: 0;
  width: 0.1rem;
  background-color: var(--neon);
  transition: all 200ms;
  transform: translateY(${({ offset, length }) => offset * length}px);

  @media only screen and (max-width: 48.4rem) {
    top: auto;
    bottom: 0;
    height: 0.1rem;
    width: ${({ length }) => length}px;
    transform: translateX(${({ offset, length }) => offset * length}px);
  }
`;

export const ChangeAnim = keyframes`
  0% {
    opacity: 0;
    scale: 0.9;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

export const TabPanel = styled.article<{ hidden: boolean }>`
  min-height: 100%;
  background: var(--secondary);
  padding: 0.5rem;
  display: grid;
  grid-template-areas:
    "title link"
    "date date"
    "list list";
  animation: ${ChangeAnim} 500ms ease-out;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
      visibility: hidden;
    `}
`;

export const Title = styled.h1`
  grid-area: title;
  margin: 0;
  align-self: center;
  color: rgb(231, 230, 225);
  font-size: 1.6rem;
  font-weight: 700;
  font-family: Heebo, sans-serif;
`;

export const TimeSpawns = styled.span`
  grid-area: date;
  align-self: center;
  color: var(--neon);
  font-size: 1rem;
  font-weight: 800;
  font-family: "Roboto Mono", monospace;
`;

export const Link = styled.span`
  grid-area: link;
  align-self: center;
  justify-self: end;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--neon);
  }
`;

export const List = styled.ul`
  grid-area: list;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 2rem;
  list-style: none;
  gap: 0.5rem;
`;

export const Item = styled.li`
  position: relative;
  color: rgb(170, 189, 230, 0.8);
  font-size: 1.1rem;
  font-weight: 400;

  &:before {
    content: "\25B6";
    position: absolute;
    color: var(--neon);
    left: -1.5rem;
  }
`;
