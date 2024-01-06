import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOCIALS } from "@/config/socials";
import { AtSign, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    href: SOCIALS.github,
    label: "GitHub",
    icon: <Github className="w-6 h-6" />,
  },
  {
    href: SOCIALS.linkedin,
    label: "Linkedin",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    href: SOCIALS.telegram,
    label: "Telegram",
    icon: <Send className="w-6 h-6" />,
  },
  {
    href: SOCIALS.email,
    label: "Gmail",
    icon: <AtSign className="w-6 h-6" />,
  },
];

export const Footer = () => {
  const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric" });

  return (
    <footer className="w-full border-t-2">
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
          &copy; Designed & Build by Mykhailo Toporkov{" "}
          {formatter.format(new Date())}
        </p>
      </div>
    </footer>
  );
};
