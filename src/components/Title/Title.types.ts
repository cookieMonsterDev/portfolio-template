import { Keyframes } from "@emotion/react";

export type TitleProps = {
  children: React.ReactNode;
  animation?: Keyframes;
  textAlign?: "left" | "center" | "right";
};
