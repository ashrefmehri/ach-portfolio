"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { PhoneCall, FileText } from "lucide-react";
import { MainCardMenu } from "@/modules/maincard/maincard-menu";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export const MainCard = () => {
 const { theme, setTheme } = useTheme()
  return (
    <Card className="fixed  max-w-[340px] p-6">
      <CardContent>
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/me.png"
            alt="me"
            className="rounded-full"
            width={140}
            height={140}
          />
          <div className="space-y-1">
            <h1 className="tracking-tighter font-bold text-xl">Achref Mehri</h1>
            <p className="text-muted-foreground text-sm tracking-tighter">
              Full Stack JS Developer · React · Next.js · Node.js
            </p>
          </div>
        </div>
        <div className="space-x-3 mt-4">
          <Button className="bg-transparent border dark:border-white dark:text-white  text-black hover:bg-transparent">
            <PhoneCall className="w-4 h-4 mr-2" />
            Book a Call
          </Button>

          <Button>
            <FileText className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </div>

        <div className="">
          <MainCardMenu />
        </div>
      </CardContent>
      <CardFooter  className="mt-4  space-y-2  flex flex-col   ">
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}  variant="outline" className=" rounded-md flex items-center justify-center tracking-tighter w-full font-semibold">
          {theme === "light" ? (
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5" />
          <span className="">Dark Mode</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5" />
          <span className="">Light Mode</span>
            </div>
          )}

        </Button>
        <p className="text-sm tracking-tighter text-muted-foreground">Designed & built by Achref Mehri © 2025. All rights reserved.</p>
      </CardFooter>
    </Card>
  );
};
