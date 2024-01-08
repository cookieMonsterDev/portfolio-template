"use client";
import { Button } from "@/components/ui/button";
import { ProjectColumn } from "./columns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { dateTimeFormatter } from "@/lib/utils";
import { useAlert } from "@/hooks/use-alert";

type CellActionProps = {
  data: ProjectColumn;
};

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const { toast } = useToast();
  const { onOpen } = useAlert();

  const onUpdate = () => {
    router.push(`/dashboard/projects/${data.id}`);
  };

  const onDelete = async () => {
    try {
      await axios.delete(`/api/projects/${data.id}`);

      router.refresh();
      router.push("/dashboard/projects");
      toast({
        title: "Project successfully deleted.",
        description: dateTimeFormatter.format(new Date()),
      });
    } catch (error) {
      toast({
        title: "Project is not deleted!",
        description: "Something went wrong during deleting project.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onUpdate}>
            <Edit className="w-4 h-4 mr-2" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => 
              onOpen({
                title: "The action can not be undone!",
                description: "Are you sure that want to delete project?",
                action: onDelete,
              })
            }
          >
            <TrashIcon className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
