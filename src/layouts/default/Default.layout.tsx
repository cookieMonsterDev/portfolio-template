import { Wallpaper } from "@components/Wallpaper";
import { DefaultLayoutProps } from "./Default.types";
import { NavBar, TabProps } from "@components/NavBar";
import { Head } from "@components/Head";

const Tabs: TabProps[] = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <Wallpaper />
      <NavBar tabs={Tabs} />
      {children}
    </>
  );
};
