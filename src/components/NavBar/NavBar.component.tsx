"use client";

import { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { isBrowser } from "@/utils/is-browser";

export const NavBarСomponent = () => {
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

  const className = classnames("fixed top-0 w-full bg-slate-500 duration-300", {
    "-translate-y-full": !isShow,
  });

  return (
    <nav className={className}>
      <div className="container flex justify-between p-4">
        <div className="">test</div>
        <div className="">test</div>
      </div>
    </nav>
  );
};
