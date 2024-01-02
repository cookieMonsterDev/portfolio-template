import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";

const Home = async () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Home;
