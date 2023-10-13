"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "@/hooks/use-auth-store";
import { auth } from "@/lib/utils";

type AuthFormT = {
  accessKey: string;
};

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AuthFormT>({
    defaultValues: {
      accessKey: "",
    },
  });

  const setAuth = useAuthStore((state) => state.updateAuth);

  const onSubmit = (values: AuthFormT) => {
    if (auth(values.accessKey)) {
      setAuth(true);
      return;
    }

    setError("accessKey", {
      type: "manual",
      message: "Invalid access key",
    });
  };

  return (
    <div className="relative w-full flex flex-col pt-12 pb-6 px-6 rounded-lg md:mt-0 sm:max-w-lg border border-shark-300">
      <Link href={"/"} className="absolute top-1 right-3 text-4xl">
        ×
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <h1 className="self-center text font-bold text-2xl">
          Sign in to have access to manage Blog
        </h1>
        <label className="flex flex-col text-lg mt-8">
          <span>Access Key</span>
          <Input
            {...register("accessKey", {
              required: "AccessKey Address is required!",
            })}
            type="password"
            className="mt-1"
          />
        </label>
        {errors.accessKey && (
          <span className="text-red-500 mt-2">{errors.accessKey.message}</span>
        )}
        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </div>
  );
};
