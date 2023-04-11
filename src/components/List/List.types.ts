import Project from "@features/project.types";

export type ListProps = {
  list: Project[];
  buttonType?: 'link' | 'button';
}