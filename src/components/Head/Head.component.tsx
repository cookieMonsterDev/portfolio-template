import React from "react";
import Head from "next/head";
import { HeadProps } from "./Head.types";

export const HeadComponent: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourwebsite" />
      <meta name="twitter:creator" content="@yourtwitterhandle" />
      <meta name="twitter:title" content="your title" />
      <meta name="twitter:description" content="your description." />
      <meta
        name="twitter:image"
        content="https://where-your-image-is-hosted/name.jpg"
      />
    </Head>
  );
};
