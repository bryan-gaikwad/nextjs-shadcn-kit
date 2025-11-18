"use client"

import { RootComponents } from "@/components/examples/root-components"

export default function DashboardWidgetsPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full min-w-0 overflow-hidden">
      <div className="px-4 lg:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Widget Showcase</h1>
          <p className="text-lg text-muted-foreground">
            A collection of advanced widget compositions and real-world component examples.
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6 w-full min-w-0 overflow-hidden">
        <RootComponents />
      </div>
    </div>
  )
}
