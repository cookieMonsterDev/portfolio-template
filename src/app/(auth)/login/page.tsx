"use client";
import { AuthForm } from "@/components/forms/auth-form";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isAuthenticated, updateAuth } = useAuthStore();

  const fn = () => {
    updateAuth(true);
    redirect("/");
  };

  useEffect(() => {
    if (isAuthenticated) {
      redirect("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <main className="w-full h-screen flex items-center justify-center px-auto">
      <AuthForm />
    </main>
  );
};

export default LoginPage;
