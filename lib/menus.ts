import {
  Home,
  UserRound,
  Trophy,
  Folder,
  PenLine,
} from "lucide-react";

export type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: UserRound,
  },
  {
    label: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Folder,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: PenLine,
  },
];
