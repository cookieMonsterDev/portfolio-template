"use client";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const linksList = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const auth = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    setIsMounted(true);

    if (!auth) {
      redirect("/login");
    }
  }, [auth]);

  if (!isMounted) return null;

  return (
    <>
      <NavBar linksList={linksList} />
      <main className="container pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
