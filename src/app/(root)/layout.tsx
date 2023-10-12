import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
