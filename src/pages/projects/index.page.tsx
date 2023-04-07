import { Footer } from "@components/Footer";
import { List } from "@components/List";
import { Title } from "@components/Title/Title.styled";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import { DefaultLayout } from "@layouts/default";
import { Main } from "@styles/common";
import React from "react";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <DefaultLayout>
      <Main>
        <Title>Stuff that I have done so far...</Title>
        <List list={projects} buttonType="button" />
      </Main>
      <Footer stats={false} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async () => {
  const user = process.env.API_USERNAME!;
  const { data } = await gitHubApi.get<Project[]>(`users/${user}/repos`);

  return {
    props: {
      projects: data,
    },
  };
};

export default Projects;
