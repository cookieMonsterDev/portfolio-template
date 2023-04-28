import { Keyframes, css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { NeonButton } from "@styles/common";

export const ResumeButton = styled(NeonButton)`
  font-size: 1.3rem;
  padding: 0.1rem 0.5rem;
`;

export const Anim = keyframes`
  from {
    transform: translateY(-300%)
  }
  to {
    transform: translateY(0)
  }
`;

export const Link = styled.a<{ animation?: Keyframes | null; delay: number }>`
  ${({ animation, delay }) =>
    animation &&
    css`
      transform: translateY(-300%);
      animation: ${animation} 500ms ease-out forwards;
      animation-delay: ${150 * delay}ms;
    `}
`;
