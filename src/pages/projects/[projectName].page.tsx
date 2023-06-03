import config from "@config";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import serverSideErrorHandler from "@features/serverSideErrorHandler";
import { DefaultLayout } from "@layouts/default";
import { GetStaticPropsContext } from "next";
import {
  Des,
  Item,
  List,
  ProjectContainer,
  Stats,
  Time,
  TimeContainer,
  Title,
} from "./projects.styled";
import { ProgressCircle } from "@components/ProgressCircle";

type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps) => {
  console.log(project);

  const dateFormater = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <DefaultLayout>
      <ProjectContainer>
        <Title>{project.name}</Title>
        <Des>{project.description}</Des>
        <List>
          {project.topics.map((e) => (
            <Item key={e}>{e}</Item>
          ))}
        </List>
        <Stats>
          <ProgressCircle min={0} max={100} current={project.forks_count} title="Forks" />
          <ProgressCircle min={0} max={100} current={project.stargazers_count} title="Stars" />
        </Stats>
        <TimeContainer>
          <Time time={dateFormater.format(new Date(project.created_at))}>Created:</Time>
          <Time time={dateFormater.format(new Date(project.updated_at))}>Lats updated:</Time>
        </TimeContainer>
      </ProjectContainer>
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
