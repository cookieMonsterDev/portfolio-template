import React from "react";
import Head from "next/head";
import { HeadProps } from "./Head.types";
import img from "../../../public/test.jpg";

const defaults = {
  title: `cookieMonsterDev`,
  description: `Hello it is me Mario!`,
  image: img.src,
  url: `${process.env.VERCEL_URL!}`,
};

export const HeadComponent: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title || defaults.title}</title>
      <meta name="description" content={description || defaults.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title || defaults.title} />
      <meta property="og:description" content={description || defaults.description} />
      <meta property="og:image" content={image || defaults.image} />
      <meta property="og:url" content={title || defaults.title} />
      <meta property="og:type" content="website" />

      {/*<!-- Twitter Meta Tags -->*/}
      <meta name="twitter:title" content={title || defaults.title} />
      <meta name="twitter:description" content={description || defaults.description} />
      <meta name="twitter:image" content={image || defaults.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
