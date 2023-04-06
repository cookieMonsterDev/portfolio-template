import { Background } from "@components/background";
import { Overlay } from "@components/Overlay";
import Link from "next/link";
import React, { ReactElement } from "react";
import { DialogContainer, ErrorButton, Main } from "./404.styles";
import gif from "../../../public/404.gif";
import { NextPageWithLayout } from "@pages/_app";
import { Layout404 } from "@layouts/404";

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <Background />
      <Overlay>
        <DialogContainer open>
          <h1>Oops!</h1>
          <Main>
            <p>
              <strong>We can't seem to find a page you're looking for.</strong>
            </p>
            <p>
              <strong>Error code: 404</strong>
            </p>
            <p>Try to start from the beginning from the Home page:</p>
          </Main>
          <Link href="/">
            <ErrorButton variant="outlined" role="link">
              Go to Home
            </ErrorButton>
          </Link>
          <img src={gif.src} alt="john_travolta_meme_gif" />
        </DialogContainer>
      </Overlay>
    </>
  );
};

ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout404>{page}</Layout404>;
};

export default ErrorPage;
