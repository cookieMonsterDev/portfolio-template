import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
}) => {
  return (
    <Card>
      <CardContent>
        <Image src={""} alt="project-img" width={10} height={10} className="" />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
