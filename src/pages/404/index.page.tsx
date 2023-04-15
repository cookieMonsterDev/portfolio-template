import { Overlay } from "@components/Overlay";
import { ReactElement } from "react";
import { DialogContainer, Main } from "./404.styled";
import { NextPageWithLayout } from "@pages/_app.page";
import { Layout404 } from "@layouts/404";
import { NeonButton } from "@styles/common";
import Image from "next/image";
import Link from "next/link";
import gif from "../../../public/404.gif";

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <Overlay>
        <DialogContainer open>
          <h1>Oops!</h1>
          <Main>
            <p>
              <strong>{"We can't seem to find a page you're looking for."}</strong>
            </p>
            <p>
              <strong>Error code: 404</strong>
            </p>
            <p>Try to start from the beginning from the Home page:</p>
          </Main>
          <Link href="/">
            <NeonButton variant="outlined" role="link">
              Go to Home
            </NeonButton>
          </Link>
          <Image src={gif.src} alt="john_travolta_meme_gif" width={18} height={18} />
        </DialogContainer>
      </Overlay>
    </>
  );
};

ErrorPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout404>{page}</Layout404>;
};

export default ErrorPage;
