"use client";

import { useState, useEffect, useRef } from "react";
import { isBrowser } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { buttonVariants } from "./ui/button";
import { SideMenu } from "./side-menu";

interface NavBarProps {
  linksList?: {
    name: string;
    href: string;
  }[];
}

export const NavBar: React.FC<NavBarProps> = ({ linksList = [] }) => {
  const prevScrollpos = useRef(isBrowser() ? window.screenY : 0);
  const [isShow, setShow] = useState(true);
  const { theme } = useTheme();
  // const { isOpen, setOpen, setClose } = useSideMenuStore();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos.current < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos.current = currentScrollPos;
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isOpen]);

  return (
    <header className={cn("fixed top-0 left-0 w-full h-16 border-b-2")}>
      <div className="container h-full flex items-center justify-between">
        <Link
          href="/"
          className={buttonVariants({ size: "icon", variant: "ghost" })}
        >
          <Image
            src={
              theme === "dark"
                ? "/logo_2023_hex_letter_dark.svg"
                : "/logo_2023_hex_letter_light.svg"
            }
            width={40}
            height={40}
            alt={"my-logo"}
            priority
          />
        </Link>

        <div className="hidden md:flex lg:flex">
          <nav className="flex items-center gap-6 mr-6">
            {linksList.map((e) => (
              <Link href={e.href} key={e.href} className="text-xl font-medium">
                {e.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
        <div className="block md:hidden lg:hidden">
          <SideMenu linksList={linksList} />
        </div>
      </div>
    </header>
  );
};
