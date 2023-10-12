"use client";
import { useAuth, useUpdateAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SignInPage = () => {
  const fn = useUpdateAuth();
  const state = useAuth();

  const newFn = () => {
    fn();
    redirect("/");
  };

  useEffect(() => {
    if (state) {
      redirect("/");
    }
  }, [state]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className={`px-4 py-2 border border-1 ${
          state ? "border-red-500" : "border-black"
        }`}
        onClick={newFn}
      >
        Update state
      </button>
    </div>
  );
};

export default SignInPage;
