"use client";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthStore((state) => state.isAuthenticated);

  if (!auth) {
    redirect("/sign-in");
  }

  return <>{children}</>;
};

export default DashboardLayout;
