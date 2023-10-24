"use client";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const linksList = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
  },
  {
    name: "Posts",
    href: "/dashboard/posts",
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const auth = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    setIsMounted(true);

    if (!auth) {
      redirect("/sign-in");
    }
  }, [auth]);

  if (!isMounted) return null;

  return (
    <>
      <NavBar linksList={linksList} />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
