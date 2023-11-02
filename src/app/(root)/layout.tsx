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
      <main className="container min-h-[calc(100vh-150px)]">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;