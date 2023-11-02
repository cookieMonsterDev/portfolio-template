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
import { Save, Trash } from "lucide-react";
import Quill from "../quill/quill";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import toast from "react-hot-toast";
import { AlertModal } from "../modals/alert-modal";

interface SkillsFormProps {
  initialData: Post | null;
}

const formSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(10),
  content: z.string().min(50),
});

export const PostForm: React.FC<SkillsFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      desc: "",
      content: "",
    },
  });

  const buttonText = initialData ? "Save Changes" : "Create Post";
  const successToast = initialData
    ? "Post has been updated."
    : "Post has been created.";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      if (!initialData) {
        await axios.post("/api/posts", { ...values });
      } else {
        await axios.patch(`/api/posts/${initialData.id}`, { ...values });
      }

      router.push("/dashboard/blog");
      router.refresh();
      toast.success(successToast);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      if (!initialData) return;

      setLoading(true);

      await axios.delete(`/api/posts/${initialData.id}`);

      router.refresh();
      router.push("/dashboard/blog");
      toast.success("Post has been deleted.");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="w-full flex flex-col gap-2 overflow-hidden p-[0.3rem]">
        <div className="flex items-center justify-between">
          <Heading title="Post" />
          {initialData && (
            <Button
              disabled={loading}
              variant="destructive"
              size="sm"
              onClick={() => setOpen(true)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      {...field}
                      value={field.value || ""}
                      disabled={loading}
                      rows={10}
                      className="resize-none"
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
                    <Quill
                      value={field.value}
                      onChange={(e) => field.onChange(e)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-4 pb-4 space-x-2 flex items-center justify-end w-full">
              <Button type="submit" disabled={loading}>
                <Save className="w-4 h-4 mr-2" />
                {buttonText}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
