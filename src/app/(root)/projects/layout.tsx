type ProjectsLayoutProps = {
  children: React.ReactNode;
  tags: React.ReactNode;
  projects: React.ReactNode;
};

const ProjectsLayout = ({ children, tags, projects }: ProjectsLayoutProps) => {
  return (
    <div className="overflow-hidden pb-6">
      {tags}
      {projects}
      {children}
    </div>
  );
};

export default ProjectsLayout;
