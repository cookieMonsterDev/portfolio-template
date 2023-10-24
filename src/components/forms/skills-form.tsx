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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Heading } from "@/components/ui/heading";
import { Delete, Plus } from "lucide-react";
import { Skill } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface SkillsFormProps {
  initialData: Skill[];
}

const formSchema = z.object({
  title: z.string().min(1),
});

export const SkillsForm: React.FC<SkillsFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post("/api/skills", { ...values });
      router.refresh();
      toast.success("Skill has been added!");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async (skillId: string) => {
    try {
      await axios.delete(`/api/skills/${skillId}`);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 overflow-hidden p-[0.3rem]">
      <Heading title={"Skills, Tools & Technologies"} />
      <h2 className="text-sm">Skils:</h2>
      <div className="flex items-start flex-wrap gap-2 border border-slate-200 rounded-md p-2 dark:border-slate-800">
        {initialData.length === 0 && <span className="opacity-50 text-medium text-slate-200">The are no skills yet.</span>}
        {initialData.map((e) => (
          <span
            key={e.id}
            className="max-w-full max-h-6 bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950 rounded-xl px-4 flex items-center justify-between gap-2"
          >

            <p className="overflow-hidden text-ellipsis flex-1">{e.title}</p>
            <Delete
              className="min-h-6 min-w-6 cursor-pointer"
              onClick={() => onDelete(e.id)}
            />
          </span>
        ))}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end mt-auto">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Skill*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your skill"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="ml-2">
            <Button type="submit" disabled={loading}>
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
