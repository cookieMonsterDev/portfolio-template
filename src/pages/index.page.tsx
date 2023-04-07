import { Footer } from "@components/Footer";
import { Head } from "@components/Head";
import { List } from "@components/List";
import Test1 from "@components/Test/Test1";
import Test2 from "@components/Test/Test2";
import gitHubApi from "@features/axios";
import Project from "@features/project.types";
import { DefaultLayout } from "@layouts/default";

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
        <div style={{ minHeight: "100vh" }}>test</div>
        <Test1 />
        <Test2 />
        <List list={projects}/>
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
