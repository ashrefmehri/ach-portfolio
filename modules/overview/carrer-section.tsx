import { Card, CardContent } from "@/components/ui/card"
import { careerStats } from "@/lib/career"
import { cn } from "@/lib/utils"
import { BarChartIcon as ChartNoAxesCombined } from "lucide-react"

export const CareerSection = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center gap-2">
            <ChartNoAxesCombined className="w-7 h-7 text-primary" />
            <h2 className="text-xl font-medium tracking-tight">Professional Highlights</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerStats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "group relative overflow-hidden rounded-lg bg-accent p-4",
                  "transition-all duration-200 hover:scale-[1.02]",
                  "border border-transparent hover:border-border",
                )}
              >
                {/* Stat Content */}
                <div className="space-y-4">
                  {/* Value and Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold tracking-tight">+{stat.value}</span>
                      <span className="text-sm font-medium text-muted-foreground">{stat.unit}</span>
                    </div>
                    <stat.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Label */}
                  <div>
                    <h3 className="text-base font-semibold tracking-tight leading-tight">{stat.label}</h3>
                  </div>
                </div>

                {/* Subtle background decoration */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
