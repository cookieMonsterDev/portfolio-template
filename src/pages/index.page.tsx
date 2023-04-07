import { Footer } from "@components/Footer";
import { Head } from "@components/Head";
import Test1 from "@components/Test/Test1";
import Test2 from "@components/Test/Test2";
import gitHubApi from "@features/axios";
import { DefaultLayout } from "@layouts/default";

const Home = ({ projects, currentProject }: { projects: any, currentProject: any }) => {

  // const footerProps = {
  //   forksCount: currentProject.forks_count,
  //   stargazersCount: currentProject.stargazers_count
  // };

  const footerProps = {
    forksCount: 0,
    stargazersCount: 0
  };

  return (
    <>
      <Head />
      <DefaultLayout>
        <div style={{ minHeight: "100vh" }}>test</div>
        <Test1 />
        <Test2 />
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
      // currentProject: thisProject
    },
  };
};

export default Home;
