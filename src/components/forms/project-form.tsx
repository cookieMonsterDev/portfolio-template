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
import { Project, ProjectTag } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Input } from "../ui/input";
import { AlertModal } from "@/components/modals/alert-modal";
import ImageUpload from "../ui/image-uploda";
import { ProjectTags } from "./project-tags";

interface ProjectFormProps {
  initialProject: null | Project;
  initialTags: null | ProjectTag[];
}

const formSchema = z.object({
  title: z.string().min(1).max(100),
  owner: z.string().min(1).max(100),
  desc: z.string().nullable().optional(),
  github_url: z.string().url().nullable().optional(),
  deployment_url: z.string().url().nullable().optional(),
  image_url: z.string().url().nullable().optional(),
});

export const ProjectForm: React.FC<ProjectFormProps> = ({
  initialProject,
  initialTags,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialProject || {
      title: "",
      owner: "",
    },
  });

  const buttonText = initialProject ? "Save Changes" : "Create Project";
  const successToast = initialProject
    ? "Project has been updated."
    : "Project has been created.";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      if (initialProject) {
        await axios.patch(`/api/projects/${initialProject.id}`, values);
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
      if (!initialProject) return;

      setLoading(true);

      await axios.delete(`/api/projects/${initialProject.id}`);

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
          {initialProject && (
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
            {initialProject && (
              <div className="col-span-1">
                <ProjectTags
                  data={initialTags || []}
                  disabled={loading}
                  projectId={initialProject.id}
                />
              </div>
            )}
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <ImageUpload
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange(null)}
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
