import { Keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Span = styled.span<{
  isActive?: boolean;
  apperenceAinamtion?: Keyframes;
  hoverAinamtion: Keyframes;
  delay?: number;
  duration?: number;
  theColor?: string;
  hoverColor?: string;
  hover?: boolean;
}>`
  display: inline-block;
  opacity: 0;
  color: ${({ theColor }) => theColor};

  ${({ isActive, hoverAinamtion, hoverColor, theColor, hover }) =>
    !isActive &&
    css`
      opacity: 1;
      transition: all 300ms;
      &:hover {
        color: ${hoverColor};
        text-shadow: 1px 1px 2px ${theColor};
      }

      ${hover &&
        css`
          animation: ${hoverAinamtion} 700ms alternate;
        `}
    `}

  ${({ isActive, delay, duration, apperenceAinamtion }) =>
    isActive &&
    css`
      animation: ${apperenceAinamtion} ${duration}ms forwards;
      animation-delay: ${delay}ms;
    `}
`;
