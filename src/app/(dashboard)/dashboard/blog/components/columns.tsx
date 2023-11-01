"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Post } from "@prisma/client";
import { CellAction } from "./cell-action";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type PostColumn = Pick<Post, "id" | "title" > & {
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<PostColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const title = row.original.title;

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="max-w-[20rem] overflow-hidden text-ellipsis">
              {title}
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Creation Date",
  },
  {
    accessorKey: "updatedAt",
    header: "Last Update",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
