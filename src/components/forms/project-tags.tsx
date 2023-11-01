"use client";
import { cn } from "@/lib/utils";
import { ProjectTag } from "@prisma/client";
import { cva } from "class-variance-authority";
import { Delete, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ProjectTagsProps {
  data: ProjectTag[];
  projectId: string;
  disabled: boolean;
}

const selectVariants = cva(
  "flex items-center w-full rounded-md border border-slate-200 bg-white px-3 py-2 ring-offset-white text-sm placeholder:text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400",
  {
    variants: {
      variant: {
        default: "",
        focus: "outline outline-2 outline-offset-2",
        disabled: "sda",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

export const ProjectTags: React.FC<ProjectTagsProps> = ({
  data,
  disabled,
  projectId,
}) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [focus, setFocus] = useState(false);

  const onCreate = async () => {
    if (!title) return;
    try {
      await axios.post(`/api/project-tags/`, { title, projectId });

      router.refresh();

      setTitle("");
    } catch (error: any) {
      toast.error("Something went wrong.");
    }
  };

  const onDelete = async (id: string) => {
    try {
      await axios.delete(`/api/project-tags/${id}`);

      router.refresh();
    } catch (error: any) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Tags*
      </label>
      <div
        className={cn(
          selectVariants({ variant: !focus ? "default" : "focus" })
        )}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <div className="flex items-center flex-1 flex-wrap relative overflow-hidden box-border gap-2">
          {data.map((e) => (
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
          <div className="box-border flex-auto">
            <input
              className="outline-none w-full min-w-[2px] bg-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={disabled}
            />
          </div>
        </div>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="w-5 h-5"
          onClick={onCreate}
          disabled={disabled}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
