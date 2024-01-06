"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "@/hooks/use-auth-store";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  accessKey: z.string().min(1),
});

export const LoginForm = () => {
  const setAuth = useAuthStore((state) => state.updateAuth);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accessKey: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const isAuth = values.accessKey === process.env.NEXT_PUBLIC_ACCESS_KEY;

    if (isAuth) {
      setAuth(true);
    }
  };

  return (
    <div className="relative w-full flex flex-col pt-12 pb-6 px-6 rounded-lg md:mt-0 sm:max-w-lg border">
      <Link href={"/"} className="absolute top-1 right-3 text-4xl">
        ×
      </Link>
      <h1 className="mb-4 text-2xl">Sign In to manage App</h1>
      <div className="space-y-4 py-2 pb-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="accessKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Access Key</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Access Key" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-center w-full">
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
