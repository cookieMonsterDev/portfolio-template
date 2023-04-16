import { Footer } from "@components/Footer";
import { List } from "@components/List";
import { Socials } from "@components/Socials";
import { Tabs } from "@components/Tabs";
import { Title } from "@components/Title";
import { Welcome } from "@components/Welcome";
import config from "@config";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import serverSideErrorHandler from "@features/serverSideErrorHandler";
import { DefaultLayout } from "@layouts/default";
import { TitleFirst } from "@styles/animations";
import { FirstSection, Main, Section } from "@styles/common";

type HomeProps = {
  projects: Project[];
  currentProject: Project;
};

const Home = ({ projects, currentProject }: HomeProps) => {
  const footerProps = {
    forksCount: currentProject.forks_count,
    stargazersCount: currentProject.stargazers_count,
  };

  return (
    <>
      <DefaultLayout>
        <Main>
          <FirstSection>
            <Welcome />
          </FirstSection>
          <Section id="experience">
            <Title animation={TitleFirst}>Experience & Education</Title>
            <Tabs />
          </Section>
          <Section id="projects">
            <Title animation={TitleFirst}>Some my projects</Title>
            <List list={projects} />
          </Section>
          <Section id="contact">
            <h1>About</h1>
          </Section>
        </Main>
        <Socials />
        <Footer {...footerProps} />
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const user = config.git.github_user_name;
  const thisRepoName = config.git.this_repo_name;

  try {
    const { data } = await gitHubApi.get<Project[]>(`users/${user}/repos`);
    const projects = data.slice(0, 6);
    const thisProject = data.filter((e) => e.name === thisRepoName)[0];

    return {
      props: {
        projects: projects,
        currentProject: thisProject,
      },
    };
  } catch (error) {
    return serverSideErrorHandler(error);
  }
};

export default Home;
