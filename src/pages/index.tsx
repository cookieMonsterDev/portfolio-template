import { Background } from "@components/background";
import { Head } from "@components/Head";
import gitHubApi from "@features/axios";

const Home = ({ projects }: { projects: any }) => {
  console.log(projects)

  return (
    <>
      <Head title="sth" description="test"/>
      <Background />
    </>
  );
};

export const getServerSideProps = async () => {
  const user = process.env.API_USERNAME!;
  const { data } = await gitHubApi.get(`users/${user}/repos`);

  return {
    props: {
      projects: data,
    },
  };
};

export default Home;
