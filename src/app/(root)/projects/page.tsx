import { Suspense } from "react";
import Tags from "./components/tags";
import LoadingTags from "./components/loading-tags";
import Projects from "./components/projects";
import LoadingProjects from "./components/loading-projects";

type ProjectsPagseProps = {
  searchParams: {
    title: string;
  };
};

const ProjectsPage = ({ searchParams }: ProjectsPagseProps) => {
  return (
    <>
      <Suspense fallback={<LoadingTags />}>
        <Tags searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<LoadingProjects />}>
        <Projects searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default ProjectsPage;
