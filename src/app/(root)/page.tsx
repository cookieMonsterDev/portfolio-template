import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { innerApi } from "@/lib/axios";

const Home = async () => {
  const { data: skills } = await innerApi.get("/api/skills");
  const { data: bio } = await innerApi.get("/api/bio");

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About bio={bio} skills={skills} />
      <Contact />
    </main>
  );
};

export default Home;
