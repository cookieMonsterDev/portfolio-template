import { getProject } from "@/actions/get-project";
import { getTags } from "@/actions/get-tags";
import { ProjectForm } from "@/components/forms/project-form";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProject(params.projectId);
  const tags = await getTags({ projectId: params.projectId });

  return <ProjectForm initialProject={project} initialTags={tags} />;
};

export default ProjectPage;
