import { DefaultLayout } from "@layouts/default";
import { Footer } from "@components/Footer";
import { List } from "@components/List";
import { Main } from "@styles/common";
import { ProjectsTitle } from "./projects.styled";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import config from "@config";
import serverSideErrorHandler from "@features/serverSideErrorHandler";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <DefaultLayout>
      <Main>
        <ProjectsTitle>Stuff that I have done so far...</ProjectsTitle>
        <List list={projects} buttonType="button" />
      </Main>
      <Footer stats={false} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async () => {
  const user = config.git.github_user_name;
  try {
    const { data } = await gitHubApi.get<Project[]>(`users/${user}/repos`);

    return {
      props: {
        projects: data,
      },
    };
  } catch (error) {
    return serverSideErrorHandler(error);
  }
};

export default Projects;
