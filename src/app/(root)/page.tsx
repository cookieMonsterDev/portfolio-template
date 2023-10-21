import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";

const Home = async () => {

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
