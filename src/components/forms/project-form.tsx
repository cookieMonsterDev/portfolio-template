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
import { Save } from "lucide-react";
import { Project } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useAlert } from "@/hooks/use-alert";
import { useToast } from "../ui/use-toast";
import { dateTimeFormatter } from "@/lib/utils";

type ProjectFormProps = {
  initialProject: Project;
};

const formSchema = z.object({
  title: z.string().min(1).max(100),
  owner: z.string().min(1).max(100),
  desc: z.string().nullable().optional(),
  github_url: z.string().url().nullable().optional(),
  deployment_url: z.string().url().nullable().optional(),
});

export const ProjectForm: React.FC<ProjectFormProps> = ({ initialProject }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialProject,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.patch(`/api/projects/${initialProject.id}`, values);
      router.push(`/dashboard/projects/${initialProject.id}`);
      toast({
        title: "Project is  updated!",
        description: dateTimeFormatter.format(new Date()),
      });
    } catch (error) {
      toast({
        title: "Project is not updated!",
        description: "Something went wrong during updating project.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
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
        <div className="col-span-2 flex justify-center mb-6 mt-4">
          <Button type="submit" disabled={loading}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};
