import { Background } from "@components/background";
import { DefaultLayoutProps } from "./Default.types";
import { NavBar, TabProps } from "@components/NavBar";

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
    name: "Work",
    href: "/#work",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Background />
      <NavBar tabs={Tabs} />
      {children}
    </>
  );
};
