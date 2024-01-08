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
import { Save } from "lucide-react";
import { Bio } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { dateTimeFormatter } from "@/lib/utils";

type SkillsFormProps = {
  initialData: Bio | null;
};

const formSchema = z.object({
  text: z.string().min(50),
});

export const BioForm: React.FC<SkillsFormProps> = ({ initialData }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: initialData ? initialData.text : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      if (!initialData) {
        await axios.post("/api/bio", { ...values });
      } else {
        await axios.patch(`/api/bio/${initialData.id}`, { ...values });
      }

      router.push("/dashboard");
      router.refresh();
      toast({
        title: "Bio successfully updated.",
        description: dateTimeFormatter.format(new Date()),
      });
    } catch (error) {
      toast({
        title: "Bio is not updated!",
        description: "Something went wrong during updating bio.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 overflow-hidden p-[0.3rem]">
      <Heading title="Bio" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your bio."
                    {...field}
                    disabled={loading}
                    rows={10}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            <Button type="submit" disabled={loading}>
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
