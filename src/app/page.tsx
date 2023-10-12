import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { getRepos } from "@/services/GitHub";

const Home = async () => {
  // const data = await getRepos();

  return (
    <main className="w-full flex flex-col bg-blue-300 min-h-[300vh]">
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
