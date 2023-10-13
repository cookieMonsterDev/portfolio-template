"use client";
import { useAuthStore } from "@/hooks/use-auth-store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SignInPage = () => {
  const { isAuthenticated, updateAuth } = useAuthStore();

  const fn = () => {
    updateAuth(true);
    redirect("/");
  };

  useEffect(() => {
    if(isAuthenticated) {
      redirect('/dashboard')
    }
  }, [isAuthenticated])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className={`px-4 py-2 border border-1 ${
          isAuthenticated ? "border-red-500" : "border-black"
        }`}
        onClick={fn}
      >
        Update state
      </button>
    </div>
  );
};

export default SignInPage;
