import {
  Clock,
  Award,
  FolderGit2,
  Code2,
} from "lucide-react";

export type CareerStat = {
  label: string;
  value: number | string;
  unit?: string;
  icon: React.ElementType;
};

export const careerStats: CareerStat[] = [
  {
    label: "Experience",
    value: 1,
    unit: "year",
    icon: Clock,
  },
  {
    label: "Certificates",
    value: 22,
    icon: Award,
  },
  {
    label: "Projects",
    value: 10,
    icon: FolderGit2,
  },
  {
    label: "Technologies",
    value: 20,
    icon: Code2,
  },
];
