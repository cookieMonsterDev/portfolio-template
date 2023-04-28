import React from "react";
import Head from "next/head";
import { HeadProps } from "./Head.types";
import img from "../../../public/preview.png";
import favicon from "../../../public/favicon.svg";

const defaults = {
  title: `Mykhailo Toporkov`,
  description: `Mykhailo Toporkov is a cool full-stack engineer who builds extraordinary and hight performed applications (mostly web) that always make feel of satisfaction.`,
  image: img.src,
  url: `${process.env.VERCEL_URL!}`,
};

export const HeadComponent: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title || defaults.title}</title>
      <meta name="description" content={description || defaults.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href={favicon.src} />
  

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
