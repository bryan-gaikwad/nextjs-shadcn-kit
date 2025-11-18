import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Total Revenue</CardDescription>
          <Badge variant="outline">
            <TrendingUp className="h-3 w-3" />
            +12.5%
          </Badge>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="line-clamp-1 text-muted-foreground">
            +20.1% from last month
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Subscriptions</CardDescription>
          <Badge variant="outline">
            <TrendingUp className="h-3 w-3" />
            +180.1%
          </Badge>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +2,350
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            New signups today <TrendingUp className="h-4 w-4" />
          </div>
          <div className="line-clamp-1 text-muted-foreground">
            +180.1% from last month
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Sales</CardDescription>
          <Badge variant="outline">
            <TrendingUp className="h-3 w-3" />
            +19%
          </Badge>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +12,234
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Sales this quarter <TrendingUp className="h-4 w-4" />
          </div>
          <div className="line-clamp-1 text-muted-foreground">
            +19% from last quarter
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Growth Rate</CardDescription>
          <Badge variant="destructive" className="bg-red-500">
            <TrendingDown className="h-3 w-3" />
            -4.5%
          </Badge>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +573
          </CardTitle>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-red-600">
            Declining this week <TrendingDown className="h-4 w-4" />
          </div>
          <div className="line-clamp-1 text-muted-foreground">
            -4.5% from last week
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
