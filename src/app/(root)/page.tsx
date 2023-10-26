import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import axios from "axios";
import { headers, cookies } from "next/headers";

const Home = async () => {

  const h = { cookie: cookies().toString() };
  
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;



  const { data: skills } = await axios.get(`${baseURL}/api/skills`, {
    headers: h,
  });
  const { data: bio } = await axios.get(`${baseURL}/api/bio`, { headers: h });

  return (
    <main className="w-full flex flex-col relative">
      <Hero />
      <About bio={bio} skills={skills} />
      <Contact />
    </main>
  );
};

export default Home;
