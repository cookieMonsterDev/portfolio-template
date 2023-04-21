import styled from "@emotion/styled";
import { DefaultFading } from "@styles/animations";
import { NeonButton, PrimaryButton } from "@styles/common";

export const Container = styled.article``;

export const Heading = styled.h1`
  cursor: text;

  span {
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: 28rem) {
    span {
      font-size: 2.1rem;
    }
  }
`;

export const Space = styled.span``;

export const Info = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  opacity: 0;
  animation: ${DefaultFading} 1500ms ease-in-out 1800ms forwards;
`;

export const Button = styled(NeonButton)`
  margin-top: 1rem;
  padding: 6px 2rem;
  opacity: 0;
  animation: ${DefaultFading} 1500ms ease-in-out 1800ms forwards;
`;
