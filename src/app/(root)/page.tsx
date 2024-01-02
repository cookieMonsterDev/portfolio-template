import { getBio } from "@/actions/get-bio";
import { getSkills } from "@/actions/get-skills";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";

const Home = async () => {
  const bio = await getBio();
  const skills = await getSkills();

  return (
    <>
      <Hero />
      <About bio={bio} skills={skills} />
      <Contact />
    </>
  );
};

export default Home;
