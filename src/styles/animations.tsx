import { keyframes } from "@emotion/react";

export const DefaultFading = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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

export const RubberBand = keyframes`
    0%{
        transform: scaleX(1);
    }
    40%{
        transform: scaleX(1.5) scaleY(0.6);
    }
    55%{
        transform: scaleX(0.85) scaleY(1);
    }
    65%{
        transform: scaleX(1.2) scaleY(0.85);
    }
    75%{
        transform: scaleX(0.9)  scaleY(1);
    }
    90%{
        transform: scaleX(1.06) scaleY(0.95);
    }
    100%{
        transform: scaleX(1) scaleY(1);
    }
`;

export const RubberScale = keyframes`
    0%{
      opacity: 1;
      transform: scaleX(0) scaleY(0);
      color: #FFFFFF;
    }
    40%{
      opacity: 1;
      transform: scaleX(1.5) scaleY(1.5);
      color: #D6FCF1;
    }
    55%{
      opacity: 1;
      transform: scaleX(0.8) scaleY(0.8);
      color: #AEF7E5;
    }
    65%{
      opacity: 1;
      transform: scaleX(1.2) scaleY(1.2);
      color: #86F2D9;
    }
    75%{
      opacity: 1;
      transform: scaleX(0.9)  scaleY(0.9);
      color: #5EEDCD;
    }
    90%{
      opacity: 1;
      transform: scaleX(1.1) scaleY(1.1);
      color: #36E8C1;
    }
    100%{
      opacity: 1;
      transform: scaleX(1) scaleY(1);
      color: var(--neon);
    }
`;
