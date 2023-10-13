

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
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
