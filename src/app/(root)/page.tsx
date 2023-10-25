import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import axios from "axios";

const Home = async () => {
  const base =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL!}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const { data } = await axios.get(`${base}/api/skills`);

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About />
      <Contact />
      <div>{JSON.stringify(data)}</div>
    </main>
  );
};

export default Home;
