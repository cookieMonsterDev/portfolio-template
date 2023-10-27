"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Heading } from "../ui/heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Save } from "lucide-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface SkillsFormProps {
  initialData: Post | null;
}

const formSchema = z.object({
  title: z.string().min(50),
  content: z.string().min(100),
});

export const PostForm: React.FC<SkillsFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      content: "",
    },
  });

  const buttonText = initialData ? "Save Changes" : "Create Post";
  const successToast = initialData
    ? "Post has been updated."
    : "Post has been created.";

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   try {
  //     setLoading(true);
  //     if (!initialData) {
  //       await axios.post("/api/bio", { ...values });
  //     } else {
  //       await axios.patch(`/api/bio/${initialData.id}`, { ...values });
  //     }

  //     router.push("/dashboard");
  //     router.refresh();
  //     toast.success(
  //       initialData ? "Bio has been updated!" : "Bio has been added!"
  //     );
  //   } catch (error) {
  //     toast.error("Something went wrong.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="w-full flex flex-col gap-2 overflow-hidden p-[0.3rem]">
      <Heading title="Post" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((e) => console.log(e))}
          className="flex flex-col gap-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter title."
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content*</FormLabel>
                <FormControl>
                  <ReactQuill theme="snow" {...field} className="rounded-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            <Button type="submit" disabled={loading}>
              <Save className="w-4 h-4 mr-2" />
              {buttonText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
