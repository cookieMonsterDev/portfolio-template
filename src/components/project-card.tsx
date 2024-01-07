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

import { Image, Project, Tag } from "@prisma/client";
import { ImageOff } from "lucide-react";
import { ImageLazy } from "./ui/image-lazy";

interface ProjectCardProps {
  data: Project & { image: Image | null; tags: Tag[] };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  data: { title, owner, image },
}) => {
  return (
    <Card className="h-full shadow-lg">
      <CardContent className="pt-4 pb-0 px-4 relative w-full aspect-video rounded-md overflow-hidden flex justify-center items-center">
        {image ? (
          <ImageLazy
            src={image.url || "/no_image.jpg"}
            alt="project-img"
            width={500}
            height={500}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center border rounded-lg">
            <ImageOff className="w-20 h-20" />
          </div>
        )}
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
