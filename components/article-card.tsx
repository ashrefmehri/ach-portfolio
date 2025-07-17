import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type ArticleCardProps = {
  title: string;
  image: string;
  date: string;
};

export const ArticleCard = ({ title, image, date }: ArticleCardProps) => {
  return (
    <Card className="w-[260px] rounded-md overflow-hidden  transition">
      <CardContent className="p-0">
        <div className="relative w-full h-[160px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-semibold hover:underline cursor-pointer text-sm leading-snug">{title}</h3>
          <p className="text-muted-foreground text-xs">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
};
