import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import axios from "axios";

const Home = async () => {
  const base =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(`${base}/api/skills`);

  const data = await res.json()

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About />
      <Contact data={data}/>
    </main>
  );
};

export default Home;
