"use client";

import { useState, useEffect, useRef } from "react";
import { isBrowser } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

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

const navbarVariants = cva(
  "sticky top-0 w-full shadow-lg bg-white dark:bg-black dark:shadow dark:shadow-white duration-300 z-10 ",
  {
    variants: {
      variant: {
        open: "translate-y-0",
        closed: "-translate-y-full",
      },
    },
    defaultVariants: {
      variant: "open",
    },
  }
);

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

  return (
    <header
      className={cn(navbarVariants({ variant: isShow ? "open" : "closed" }))}
    >
      <nav className="container flex items-center justify-between py-2">
        <div className="">test</div>
        <div className="flex gap-8 items-center">
          {linksList.map((e) => (
            <Link
              href={e.href}
              key={e.href}
              className="text-xl font-medium"
            >
              {e.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
