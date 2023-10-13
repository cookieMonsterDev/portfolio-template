import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";

const Home = async () => {
  // const data = await getRepos();

  // console.log(data)

  return (
    <main className="w-full flex flex-col">
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
