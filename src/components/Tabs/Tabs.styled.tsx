import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

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

export const TabPanelsContainer = styled.div``;

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

export const TabPanel = styled.article``;
