import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Project } from "@prisma/client";
import { Image } from "lucide-react";
import NextImage from "next/image";

interface ProjectCardProps {
  data: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  data: { title, owner, image_url },
}) => {
  return (
    <Card>
      <CardContent className="pt-6 relative w-full aspect-video rounded-md overflow-hidden flex justify-center items-center">
        <NextImage
          src={image_url || "/no_image.jpg"}
          alt="project-img"
          width={500}
          height={500}
          className={cn(
            "w-full h-full object-cover",
            !image_url ? "object-contain" : ""
          )}
        />
      </CardContent>
      <CardHeader>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CardTitle className="text-xl overflow-hidden text-ellipsis text-left">
                {title}
              </CardTitle>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CardDescription className="text-sm overflow-hidden text-ellipsis text-left">
                {owner}
              </CardDescription>
            </TooltipTrigger>
            <TooltipContent>
              <p>{owner}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
    </Card>
  );
};
