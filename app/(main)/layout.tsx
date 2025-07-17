import { MainCard } from "@/components/main-card";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen  bg-slate-50 dark:bg-black md:p-8 p-4 flex  font-sans overflow-x-hidden max-w-screen-2xl ">
      <MainCard />
      <div className="ml-[360px] w-full  ">{children}</div>
    </div>
  );
}
