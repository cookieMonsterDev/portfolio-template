import React from "react";
import axios from "axios";
import { cookies, headers } from "next/headers";
import { Project } from "@prisma/client";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectList = async ({
  searchParams,
}: {
  searchParams: {
    title: string;
  };
}) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const url = new URL(`${baseURL}/api/projects`);

  if (searchParams.title) {
    url.searchParams.append("title", searchParams.title);
  }

  const { data: projects } = await axios.get(url.toString(), {
    headers: h,
  });

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
