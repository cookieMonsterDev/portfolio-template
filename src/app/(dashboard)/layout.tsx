'use client'
import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  if(!auth) {
    redirect('/sign-in')
  }

  return <>{children}</>;
};

export default DashboardLayout;
