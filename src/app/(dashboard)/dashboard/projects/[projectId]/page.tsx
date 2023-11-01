import { ProjectForm } from "@/components/forms/project-form";
import axios from "axios";
import { cookies, headers } from "next/headers";
import React from "react";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: project } = await axios.get(
    `${baseURL}/api/projects/${params.projectId}`,
    {
      headers: h,
    }
  );

  const { data: tags } = await axios.get(
    `${baseURL}/api/project-tags?projectId=${params.projectId}`,
    {
      headers: h,
    }
  );

  return <ProjectForm initialProject={project} initialTags={tags} />;
};

export default ProjectPage;
