import prismadb from "@/lib/prismadb";
import { Circle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bio, Skill } from "@prisma/client";

interface AboutProps {
  bio: Bio | null;
  skills: Skill[];
}

export const About: React.FC<AboutProps> = ({ bio, skills }) => {
  return (
    <section
      className="section flex items-center justify-center overflow-hidden"
      id="about"
    >
      <div className="container flex flex-col space-y-4 items-center md:max-w-[60rem] lg:max-w-[60rem]">
        <h3 className="text-center text-5xl font-bold mb-6">About Me</h3>
        <p className="md:max-w-[60rem] lg:max-w-[60rem]">{bio?.text}</p>
        <div className="self-start">
          <h4 className="font-bold text-xl mb-2">
            Here are some of my skills:
          </h4>
          <ul className="list-none grid  md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-1">
            {skills.map((e) => (
              <TooltipProvider key={e.id}>
                <Tooltip>
                  <TooltipTrigger>
                    <li
                      key={e.id}
                      className="max-w-full flex items-center justify-between gap-2"
                    >
                      <Circle className="w-3 h-3 fill-slate-950 dark:fill-slate-50" />
                      <p className="overflow-hidden text-ellipsis flex-1 text-left">
                        {e.title}
                      </p>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{e.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
