"use client"

import { RootComponents } from "@/components/examples/root-components"

export default function BlocksWidgetsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Widget Showcase</h1>
        <p className="text-xl text-muted-foreground">
          A collection of advanced widget compositions and real-world component examples.
        </p>
      </div>

      <div className="space-y-6">
        <RootComponents />
      </div>
    </div>
  )
}
