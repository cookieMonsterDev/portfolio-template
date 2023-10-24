import { ProjectForm } from "@/components/forms/project-form";
import prismadb from "@/lib/prismadb";
import React from "react";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  let project = null;

  if (params.projectId.length > 12) {
    project = await prismadb.project.findUnique({
      where: {
        id: params.projectId,
      },
    });
  }

  return (
    <main className="container">
      <ProjectForm initialData={project} />
    </main>
  );
};

export default ProjectPage;
