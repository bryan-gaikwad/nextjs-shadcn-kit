"use client"

import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-6">
      <Badge>
        <Spinner />
        Processing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Loading
      </Badge>
      <Badge variant="destructive">
        <Spinner />
        Error
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Pending
      </Badge>
    </div>
  )
}
