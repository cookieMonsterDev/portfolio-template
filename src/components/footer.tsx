import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AtSign, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    href: "https://github.com/cookieMonsterDev",
    label: "GitHub",
    icon: <Github className="w-6 h-6" />,
  },
  {
    href: "https://www.linkedin.com/in/mykhailo-toporkov/",
    label: "Linkedin",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    href: "https://t.me/Mykhailo_Toporkov",
    label: "Telegram",
    icon: <Send className="w-6 h-6" />,
  },
  {
    href: "mailto: mykhailo.toporkov@gmail.com",
    label: "Gmail",
    icon: <AtSign className="w-6 h-6" />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-300 dark:border-slate-700">
      <div className="container flex flex-col justify-center items-center py-4">
        <div className="pb-4 flex gap-x-6">
          {socials.map((e) => (
            <TooltipProvider key={e.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={e.href}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                  >
                    {e.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{e.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <p className="opacity-50 text-sm">
          &copy; Designed & Build by Mykhailo Toporkov 2023
        </p>
      </div>
    </footer>
  );
};
