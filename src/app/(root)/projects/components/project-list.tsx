import React from "react";
import { Project } from "@prisma/client";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/actions/get-projects";

const ProjectList = async ({
  searchParams,
}: {
  searchParams: {
    title: string;
  };
}) => {
  const projects = await getProjects(searchParams.title);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {projects.map((e: Project) => (
        <Link href={`/projects/${e.id}`} key={e.id} className="col-span-1">
          <ProjectCard data={e} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
