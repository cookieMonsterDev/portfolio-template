import { AboutMe } from "@components/AboutMe";
import { ContactMe } from "@components/ContactMe";
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
import { DefaultFading, TitleFirst } from "@styles/animations";
import { FirstSection, Main, Section } from "@styles/common";

type HomeProps = {
  projects: Project[];
  stats: {
    forksCount: number;
    stargazersCount: number;
  };
};

const Home = ({ projects, stats }: HomeProps) => {
  return (
    <>
      <DefaultLayout>
        <Main>
          <FirstSection>
            <Welcome />
          </FirstSection>
          <Section id="about">
            <Title animation={TitleFirst} textAlign="center">
              About Me
            </Title>
            <AboutMe />
          </Section>
          <Section id="experience">
            <Title animation={TitleFirst}>Experience & Education</Title>
            <Tabs />
          </Section>
          <Section id="projects">
            <Title animation={TitleFirst}>Some my projects</Title>
            <List list={projects} />
          </Section>
          <Section id="contact">
            <Title animation={DefaultFading} textAlign="center">
              CONTACT ME
            </Title>
            <ContactMe />
          </Section>
        </Main>
        <Socials />
        <Footer {...stats} />
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
    const stats = {
      forksCount: thisProject.forks_count,
      stargazersCount: thisProject.stargazers_count,
    };

    return {
      props: {
        projects: projects,
        stats,
      },
    };
  } catch (error) {
    return serverSideErrorHandler(error);
  }
};

export default Home;
