"use client";

import { menuItems } from "@/lib/menus";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainCardMenu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-5 space-y-2 ">
      {menuItems.map((elem) => {
        return (
          <Link
            key={elem.href}
            href={elem.href}
            className={cn(
              "flex gap-3   hover:bg-gray-100 dark:hover:bg-accent rounded-md font-semibold tracking-tighter px-3 py-2 items-center",
              pathname === elem.href && "bg-gray-100 dark:bg-accent "
            )}
          >
            <elem.icon className="w-5 h-5" />
            <span>{elem.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
