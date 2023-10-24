"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Project as PrismaProject } from "@prisma/client";
import { CellAction } from "./cell-action";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type ProjectColumn = Pick<PrismaProject, "id" | "title" | "owner"> & {
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<ProjectColumn>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const title = row.original.title;

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>{title}</TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "owner",
    header: "Owner",
    cell: ({ row }) => {
      const owner = row.original.owner;

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>{owner}</TooltipTrigger>
            <TooltipContent>
              <p>{owner}</p>
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
