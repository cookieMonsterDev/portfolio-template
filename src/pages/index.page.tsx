import { Footer } from "@components/Footer";
import { Head } from "@components/Head";
import gitHubApi from "@features/axios";
import { DefaultLayout } from "@layouts/default";

const Home = ({ projects, currentProject }: { projects: any, currentProject: any }) => {

  console.log(currentProject)

  const footerProps = {
    forksCount: currentProject.forks_count,
    stargazersCount: currentProject.stargazers_count
  }

  return (
    <>
      <Head />
      <DefaultLayout>
        <div style={{ minHeight: "100vh" }}>test</div>
        <div style={{ minHeight: "100vh", color: "white" }} id="about">
          test
        </div>
        <div style={{ minHeight: "100vh", color: "white" }} id="work">
          work
        </div>
        <Footer {...footerProps}/>
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const user = process.env.API_USERNAME!;
  const thisRepoName = process.env.THIS_REPO_NAME!
  const { data } = await gitHubApi.get(`users/${user}/repos`);
  const thisProject = data.filter((e: any) => e.name === thisRepoName)[0]

  return {
    props: {
      projects: data,
      currentProject: thisProject
    },
  };
};

export default Home;
