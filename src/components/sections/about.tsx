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
    <section
      className="section flex items-center justify-center overflow-hidden"
      id="about"
    >
      test
    </section>
  );
};
