"use client";

import { useState, useEffect, useRef } from "react";
import { isBrowser } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import darkLogo from "../../public/logo_2023_hex_letter_dark.svg";
import lightLogo from "../../public/logo_2023_hex_letter_light.svg";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  HamburgerMenuIcon,
  Cross2Icon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { useSideMenuStore } from "@/hooks/use-side-menu-store";

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
  "sticky top-0 w-full bg-slate-50 border-b border-slate-300 dark:bg-black dark:border-slate-700 duration-300 z-10 ",
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

const overlayVariants = cva(
  "absolute top-0 left-0 w-full h-screen backdrop-blur-sm animate-fade-in duration-300 z-20",
  {
    variants: {
      variant: {
        visible: "visible",
        invisible: "invisible",
      },
    },
    defaultVariants: {
      variant: "invisible",
    },
  }
);

const sideMenuVariants = cva(
  "bg-slate-50 border-r dark:bg-black dark:border-slate-700 w-3/4 h-[200vh] px-8 pt-6 flex flex-col overflow-auto duration-300",
  {
    variants: {
      variant: {
        open: "translate-x-0",
        closed: "-translate-x-full",
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
  const { theme } = useTheme();
  const { isOpen, setOpen, setClose } = useSideMenuStore();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos.current < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos.current = currentScrollPos;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header
      className={cn(navbarVariants({ variant: isShow ? "open" : "closed" }))}
    >
      <nav className="container flex items-center justify-between py-2">
        <div>
          <Link href="/" className="hidden lg:block">
            <Image
              src={theme === "dark" ? darkLogo.src : lightLogo.src}
              width={36}
              height={36}
              alt={"my-logo"}
              priority
            />
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 flex lg:hidden"
            onClick={setOpen}
          >
            <HamburgerMenuIcon className="h-6 w-6 rotate-0 scale-100 transition-all fill-white" />
          </Button>
          <div
            className={cn(
              overlayVariants({ variant: isOpen ? "visible" : "invisible" })
            )}
          >
            <div
              className={cn(
                sideMenuVariants({ variant: isOpen ? "open" : "closed" })
              )}
            >
              <Button
                variant="outline"
                size="icon"
                className="w-5 h-5 absolute right-2 top-2"
                onClick={setClose}
              >
                <Cross2Icon className="h-4 w-4 rotate-0 scale-100 transition-all fill-white" />
              </Button>
              <Link href="/" className="self-center">
                <Image
                  src={theme === "dark" ? darkLogo.src : lightLogo.src}
                  width={40}
                  height={40}
                  alt={"my-logo"}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          {linksList.map((e) => (
            <Link
              href={e.href}
              key={e.href}
              className="hidden text-xl font-medium lg:block opacity-50 hover:opacity-100 active:opacity-100 duration-300"
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
