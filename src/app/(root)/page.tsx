import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";

const Home = async () => {

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About />
      <Contact />
      <div className="absolute bottom-0 w-[90vh] h-[90vh] rounded-l-full rounded-r-0 bg-gradient-to-tl from-slate-700 to-slate-950 blur-md opacity-50 -z-10" />
    </main>
  );
};

export default Home;
