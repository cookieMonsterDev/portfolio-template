import { Global } from "@emotion/react";
import { globalStyle } from "@styles/global.styled";
import type { AppProps } from "next/app";
import '@styles/colors.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Global styles={globalStyle}/>
      <Component {...pageProps} />
    </>
  );
}
