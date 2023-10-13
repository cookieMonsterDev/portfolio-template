"use client";
import { useState, useEffect } from "react";

const skilsS = [
  "JavaScript (ES6+)",
  "React",
  "TypeScript",
  "NextJs",
  "NestJs",
  "Styled-components",
  "Express",
  "MongoDB",
];

export const About = () => {
  const [skils, setSkils] = useState(skilsS);

  useEffect(() => {
    const timer = setInterval(() => {
      setSkils((prev) => {
        const first = prev.shift()!;

        prev.push(first);

        return prev;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center bg-lime-100 overflow-hidden" id='about'>
      <div className="absolute top-0 left-0 w-full flex justify-center">
  
      </div>
      <div className="container flex items-center justify-center">About</div>
      <div className="absolute bottom-0">test2</div>
    </section>
  );
};