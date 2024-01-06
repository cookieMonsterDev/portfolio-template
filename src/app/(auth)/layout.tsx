"use client";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const auth = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    setIsMounted(true);

    if (auth) {
      redirect("/dashboard");
    }
  }, [auth]);

  if (!isMounted) return null;

  return (
    <main className="container h-screen w-screen flex justify-center items-center">
      {children}
    </main>
  );
};

export default DashboardLayout;
