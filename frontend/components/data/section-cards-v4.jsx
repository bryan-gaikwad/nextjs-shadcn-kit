"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, DollarSign, CreditCard, Activity } from "lucide-react"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $45,231.89
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              +20.1%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            +20.1% from last month
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Based on recent sales activity
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Subscriptions</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +2,350
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              +180.1%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            +180.1% from last month
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Growing user base consistently
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Sales</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +12,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              +19%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            +19% from last month
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Strong performance across all channels
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Now</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +573
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              +201
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            +201 since last hour
            <Activity className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Real-time user activity tracking
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
