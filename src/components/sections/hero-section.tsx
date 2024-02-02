import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { TypingEffect } from "../typing-effect";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100svh-64px)] w-full grid place-content-center">
      <div className="flex flex-col">
        <h1
          aria-label="Hi, I’m  Mykhailo, JavaScript engineer"
          className="text-4xl font-extrabold space-y-3 mb-6 lg:text-7xl"
        >
          <p aria-hidden>Hi,</p>
          <p aria-hidden>I&apos;m Mykhailo,</p>
          <p aria-hidden>Full-Stack Engineer</p>

          {/* <TypingEffect text="Full-Stack Engineer"/> */}
        </h1>
        <span className="text-xl text-gray-500">
          Front-End React Developer / Back-End NodeJS Developer
        </span>
        <div className="mt-4">
          <Link href="/#about" className={buttonVariants()}>
            ABOUT ME
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
