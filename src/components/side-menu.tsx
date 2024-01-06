import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";
import { Logo } from "./logo";

type SideMenuProps = {
  linksList?: {
    name: string;
    href: string;
  }[];
};

export const SideMenu: React.FC<SideMenuProps> = ({ linksList = [] }) => {
  const { theme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({ size: "icon", variant: "ghost" })}
      >
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="items-center">
          <Link
            href="/"
            className={buttonVariants({ size: "icon", variant: "ghost" })}
          >
            <Logo />
          </Link>
        </SheetHeader>
        <Separator />
        <nav className="flex-1 list-none flex flex-col gap-6">
          {linksList.map((e) => (
            <Link href={e.href} key={e.href} className="text-2xl font-medium">
              {e.name}
            </Link>
          ))}
        </nav>
        <Separator />
        <SheetFooter className="sm:flex-col md:flex-col">
          <ThemeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
