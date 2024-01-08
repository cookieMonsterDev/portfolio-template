"use client";
import { Tag } from "@prisma/client";
import { Delete, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { dateTimeFormatter } from "@/lib/utils";

type TagsFormProps = {
  initialTags: Tag[];
  projectId: string;
};

export const TagsForm: React.FC<TagsFormProps> = ({
  initialTags,
  projectId,
}) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const { toast } = useToast();

  const onCreate = async () => {
    if (!title) return;
    try {
      await axios.post(`/api/tags/`, { title, projectId });

      router.refresh();

      setTitle("");
      toast({
        title: "Tag is added",
        description: dateTimeFormatter.format(new Date()),
      });
    } catch (error) {
      toast({
        title: "Tag is not added!",
        description: "Something went wrong during adding tag.",
        variant: "destructive",
      });
    }
  };

  const onDelete = async (id: string) => {
    try {
      await axios.delete(`/api/tags/${id}`);

      router.refresh();
      toast({
        title: "Tag is deleted",
        description: dateTimeFormatter.format(new Date()),
      });
    } catch (error) {
      toast({
        title: "Tag is not deleted!",
        description: "Something went wrong during deleting tag.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-2 flex flex-col">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Project tags
      </label>
      <div className="min-h-52 flex-1 flex flex-col gap-2">
        <div className="flex-1 border border-input rounded-md box-border p-2 mt-2 overflow-auto">
          <div className="box-border flex items-start flex-wrap gap-1">
            {initialTags.map((e) => (
              <span
                key={e.id}
                className="max-w-full max-h-6 bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950 rounded-xl px-4 flex items-center justify-between gap-2"
              >
                <p className="overflow-hidden text-ellipsis flex-1">
                  {e.title}
                </p>
                <Delete
                  className="min-h-6 min-w-6 cursor-pointer"
                  onClick={() => onDelete(e.id)}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Button
            size="icon"
            variant="outline"
            className="ml-2"
            onClick={onCreate}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
