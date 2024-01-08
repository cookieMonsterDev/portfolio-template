type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return <div className="overflow-hidden pb-6">{children}</div>;
};

export default ProjectsLayout;
