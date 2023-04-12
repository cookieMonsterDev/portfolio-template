import { Keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Heading = styled.h2<{ inView: boolean; animation?: Keyframes }>`
  position: relative;
  font-size: 2rem;
  font-weight: 600;
  color: var(--neon);
  margin-bottom: 2rem;
  opacity: 0;

  ${({ inView, animation }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${animation} 700ms ease-out;
    `}
`;
