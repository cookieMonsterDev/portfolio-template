import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export type NavBarProps = {
  tabs: Tab[];
  logo?: React.ReactNode;
}

export type Tab = {
  name: string;
  href: string;
  content?: React.ReactNode;
}

export type TabProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & Tab



