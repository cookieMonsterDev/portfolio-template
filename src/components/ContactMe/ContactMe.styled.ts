import styled from "@emotion/styled";
import { css } from '@emotion/react'
import { Button } from "@mui/material";
import { Rollout } from "@styles/animations";

export const Container = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  opacity: 0;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${Rollout} 700ms ease-out;
    `}
`;

export const Text = styled.p`
  max-width: 40rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--primary);
`;

export const ContactButton = styled(Button)`
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: none;
  padding: 0.5rem 2rem;
  color: var(--neon);
  border: 0.1rem solid var(--neon);
  overflow: hidden;
  transition: all 700ms;

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 100%;
    background: var(--neon);
    transform: translateX(-100%) skew(-20deg);
    z-index: -1;
    transition: all 700ms;
  }

  &:hover {
    color: var(--secondary);

    &::before {
      transform: translateX(0) skew(-20deg);
    }
  }
`;
