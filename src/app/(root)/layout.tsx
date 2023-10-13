

import { Footer } from "@/components/sections/footer";
import { NavBar } from "@/components/sections/navbar";
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
