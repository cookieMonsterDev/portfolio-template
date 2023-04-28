import config from "@config";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import serverSideErrorHandler from "@features/serverSideErrorHandler";
import { DefaultLayout } from "@layouts/default";
import { GetStaticPropsContext } from "next";

type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps) => {
  console.log(project)

  return (
    <DefaultLayout>
      <div>{project.name}</div>
    </DefaultLayout>
  );
};

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const projectName = context.params?.projectName;
  const user = config.git.github_user_name;

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
