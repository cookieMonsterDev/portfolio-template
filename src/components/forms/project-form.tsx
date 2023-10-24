"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Heading } from "@/components/ui/heading";
import { Save, Trash } from "lucide-react";
import { Project } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Input } from "../ui/input";
import { SelectMulti } from "@/components/ui/select-multi";
import { AlertModal } from "@/components/modals/alert-modal";

interface ProjectFormProps {
  initialData: null | Project;
}

const formSchema = z.object({
  title: z.string().min(1).max(100),
  owner: z.string().min(1).max(100),
  desc: z.string().nullable(),
  github_url: z.string().url().nullable(),
  deployment_url: z.string().url().nullable(),
  tags: z.string().array(),
  image_url: z.string().url().nullable(),
});

export const ProjectForm: React.FC<ProjectFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  console.log(initialData);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      owner: "",
    },
  });

  const buttonText = initialData ? "Save Changes" : "Create Project";
  const successToast = initialData
    ? "Project has been updated."
    : "Project has been created.";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      if (initialData) {
        await axios.patch(`/api/projects/${initialData.id}`, values);
      } else {
        await axios.post(`/api/projects/`, values);
      }

      
      router.push(`/dashboard/projects`);
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

      await axios.delete(`/api/projects/${initialData.id}`);

      router.refresh();
      router.push("/dashboard/projects");
      toast.success("Project has been deleted.");
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
      <div className="p-[0.3rem]">
        <div className="flex justify-between items-center">
          <Heading
            title="Project"
            description="Manage your project data here!"
          />
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
            className="flex flex-col auto-cols-fr lg:grid gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <Input placeholder="Owner" {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Github URL"
                      {...field}
                      value={field.value || ""}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deployment_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deployment URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Deployment URL"
                      {...field}
                      value={field.value || ""}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="lg:col-span-2">
              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
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
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <SelectMulti
                        list={field.value ? field.value : []}
                        onChange={(url) => field.onChange(url)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Image URL"
                      {...field}
                      value={field.value || ""}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 flex justify-center mb-6 mt-4">
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
