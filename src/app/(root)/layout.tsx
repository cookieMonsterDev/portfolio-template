import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import React from "react";

const linksList = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar linksList={linksList} />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
