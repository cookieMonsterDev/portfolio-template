import { Keyframes } from "@emotion/react";

export type LetterProps = {
  children?: React.ReactNode;
  apperenceAinamtion?: Keyframes;
  hoverAinamtion?: Keyframes;
  delay?: number;
  duration?: number;
  theColor?: string;
  hoverColor?: string;
}