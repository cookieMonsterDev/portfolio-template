import { Global } from "@emotion/react";
import { globalStyle } from "@styles/global.styled";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
