import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const globalStyle = css`
  ${emotionNormalize};

  html {
    font-size: 1rem;
    font-weight: 300;
    font-family: Heebo, sans-serif;
  }

  * {
    scroll-behavior: smooth!important;
    --scroll-behavior: smooth!important;
    box-sizing: border-box;
    text-decoration: none!important;
  }

  #__next {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
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
    --primary-dark: rgb(136, 146, 176);
    --secondary: rgb(10, 25, 47);
    --neon: rgb(14, 227, 181);
    --neon-light: rgba(14, 227, 181, 0.2);
    --red-neon: rgb(255, 49, 49);
  }
`;
