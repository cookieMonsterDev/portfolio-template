import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const globalStyle = css`
  ${emotionNormalize};

  html {
    position: relative;
    font-size: 1rem;
    font-weight: 300;
    font-family: Heebo, sans-serif;
  }

  * {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 1.1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(10, 25, 47);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(170, 189, 230);
    border-radius: 2rem;
    border: 0.4rem solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(14, 227, 181);
  }

  &:root {
    --primary: rgb(170, 189, 230);
    --primary-light: rgb(170, 189, 230, 0.2);
    --secondary: rgb(10, 25, 47);
    --neon: rgb(14, 227, 181);
    --neon-light: rgba(14, 227, 181, 0.2);
  }
`;
