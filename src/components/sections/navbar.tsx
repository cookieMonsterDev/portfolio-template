"use client";

import { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { isBrowser } from "@/lib/utils";
import Link from "next/link";

const linksList = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

export const NavBar = () => {
  const prevScrollpos = useRef(isBrowser() ? window.screenY : 0);
  const [isShow, setShow] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos.current < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const className = classnames("fixed top-0 w-full bg-shark-400 duration-300 z-10", {
    "-translate-y-full": !isShow,
  });

  return (
    <nav className={className}>
      <div className="container flex justify-between p-4">
        <div className="">test</div>
        <div className="flex gap-8">
          {linksList.map((e) => (
            <Link href={e.href} key={e.href} className="text-xl text-white font-medium">
              {e.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
