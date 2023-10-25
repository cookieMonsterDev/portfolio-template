import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import axios from "axios";

const Home = async () => {
  const base =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const res = await axios.get(`${base}/api/skills`);

  console.log(res)

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About />
      <Contact data={res}/>
    </main>
  );
};

export default Home;
