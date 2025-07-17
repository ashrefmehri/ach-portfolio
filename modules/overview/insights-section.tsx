import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { articles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"

export const InsightsSection = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-7 h-7 text-primary" />
            <h2 className="text-xl font-medium tracking-tight">Insights & Reflections</h2>
          </div>
          <div className="p-2 flex items-center justify-center">

    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
 {articles.map((elem, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ArticleCard 
                    title={elem.title}
                    image={elem.image}
                    date={elem.date}
                    />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}




