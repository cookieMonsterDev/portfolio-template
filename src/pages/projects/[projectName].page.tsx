import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import serverSideErrorHandler from "@features/serverSideErrorHandler";
import { GetStaticPropsContext } from "next";

type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps) => {
  return <div>Project</div>;
};

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const projectName = context.params?.projectName;
  const user = process.env.API_USERNAME!;

  try {
    const { data } = await gitHubApi.get<Project>(`repos/${user}/${projectName}`);

    return {
      props: {
        project: data,
      },
    };
  } catch (error) {
    return serverSideErrorHandler(error);
  }
};

export default Project;
