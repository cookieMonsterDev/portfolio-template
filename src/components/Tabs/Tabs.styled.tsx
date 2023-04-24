import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Rollout } from "@styles/animations";

export const Container = styled.div<{ inView: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  opacity: 0;

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
    transition: all 700ms;

    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--neon);
      `}
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

export const TabPanel = styled.article<{ hidden: boolean }>`
  min-height: 100%;
  background: var(--secondary);
  padding: 0.5rem;
  display: grid;
  grid-template-areas:
    "title link"
    "date date"
    "list list";

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
  color: var(--primary);
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
  color: rgb(170, 189, 230, 0.6);
  font-size: 1rem;
  font-weight: 400;

  &:before {
    content: "\25B6";
    position: absolute;
    color: var(--neon);
    left: -1.5rem;
  }
`;
