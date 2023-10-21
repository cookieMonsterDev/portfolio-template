"use client";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthStore((state) => state.isAuthenticated);

  if (!auth) {
    redirect("/sign-in");
  }

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
