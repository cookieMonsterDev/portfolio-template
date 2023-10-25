import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import axios from "axios";
import { headers, cookies } from "next/headers";

const Home = async () => {
  const h = { cookie: cookies().toString() };
  const base =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const { data } = await axios.get(`${base}/api/skills`, { headers: h });

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About />
      <Contact data={data} />
    </main>
  );
};

export default Home;
