import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="section flex items-start justify-center">
      <div className="container h-screen flex justify-center pt-36 md:px-20 lg:px-12 md:pt-44 lg:pt-56">
        <div className="flex flex-col">
          <h1
            aria-label="Hi, I’m  Mykhailo, JavaScript engineer"
            className="text-4xl font-extrabold space-y-3 mb-6 lg:text-7xl"
          >
            <p aria-hidden>Hi,</p>
            <p aria-hidden>I&apos;m Mykhailo,</p>
            <p aria-hidden>Full-Stack Engineer</p>
          </h1>
          <span className="text-xl opacity-50">
            Front-End React Developer / Back-End NodeJS Developer
          </span>
          <div className="mt-4">
            <Link href="/#about">
              <Button className="px-12 text-lg font-bold">ABOUT ME</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
