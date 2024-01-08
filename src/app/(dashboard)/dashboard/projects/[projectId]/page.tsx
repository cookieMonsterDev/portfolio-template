import { createBlankProject } from "@/actions/create-blank-project";
import { getProject } from "@/actions/get-project";
import { getTags } from "@/actions/get-tags";
import { ProjectForm } from "@/components/forms/project-form";
import Header from "./components/header";
import { getImage } from "@/actions/get-image";
import { ImageForm } from "@/components/forms/image-form";
import { Separator } from "@/components/ui/separator";
import { TagsForm } from "@/components/forms/tags-form";
import { Tag } from "@prisma/client";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  let project;
  let image = null;
  let tags: Tag[] = [];

  if (params.projectId === "new") {
    project = await createBlankProject();
  } else {
    project = await getProject(params.projectId);
    image = await getImage(params.projectId);
    tags = await getTags({ projectId: params.projectId });
  }

  if (!project) return null;

  return (
    <div className="p-[0.3rem]">
      <Header projectId={project.id} />
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mb-8">
        <ImageForm projectId={project.id} initialImage={image} />
        <TagsForm projectId={project.id} initialTags={tags} />
      </div>
      <ProjectForm initialProject={project} />
    </div>
  );
};

export default ProjectPage;
