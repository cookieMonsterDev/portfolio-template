import prismadb from "@/lib/prismadb";
import { ProjectColumn, columns } from "./components/columns";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { format } from "date-fns";

const ProjectsPage = async () => {
  const projects = await prismadb.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedProjects: ProjectColumn[] = projects.map((e) => ({
    id: e.id,
    title: e.title,
    owner: e.owner,
    createdAt: format(e.createdAt, "h:mma dd/MM/yyyy"),
    updatedAt: format(e.updatedAt, "h:mma dd/MM/yyyy"),
  }));

  return (
    <>
      <div className="flex items-center justify-between p-8 pt-6">
        <Heading title={`Projects: (${formatedProjects.length})`} />
        <Link href="/dashboard/projects/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add new
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={formatedProjects} searchKey="title" isSearch={false}/>
    </>
  );
};

export default ProjectsPage;
