import { Background } from "@components/background";
import { Layout404Props } from "./404.types";

export const Layout404: React.FC<Layout404Props> = ({ children }) => {
  return (
    <>
      <Background />
      {children}
    </>
  );
};
