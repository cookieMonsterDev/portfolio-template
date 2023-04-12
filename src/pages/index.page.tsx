import { Footer } from "@components/Footer";
import { List } from "@components/List";
import { Title } from "@components/Title";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import { DefaultLayout } from "@layouts/default";
import { TitleFirst } from "@styles/animations";
import { Main, Section } from "@styles/common";

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
          <Section id="projects">
            <Title animation={TitleFirst}>Some my projects</Title>
            <List list={projects} />
          </Section>
        </Main>
        <Footer {...footerProps} />
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const user = process.env.API_USERNAME!;
  const thisRepoName = process.env.THIS_REPO_NAME!;
  const { data } = await gitHubApi.get<Project[]>(`users/${user}/repos`);
  const projects = data.slice(0, 6);
  const thisProject = data.filter((e) => e.name === thisRepoName)[0];

  return {
    props: {
      projects: projects,
      currentProject: thisProject,
    },
  };
};

export default Home;
