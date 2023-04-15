import { keyframes } from "@emotion/react";

export const TitleFirst = keyframes`
  0% {
    opacity: 0;
    transform: translateX(00%);
  }
  90% {
    opacity: 1;
    transform: translateX(-2%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
