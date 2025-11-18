"use client"

import { DynamicLayout } from "@/components/layout/dynamic-layout"
import { SectionCards } from "@/components/data/section-cards-v4"
import { ChartAreaInteractive } from "@/components/charts/chart-area-interactive"
import { DataTableAdvanced } from "@/components/data/data-table-advanced"
import { useAuth } from "@/context/auth-context"
import data from "./dashboard/data.json"

export default function Home() {
  return (
    <DynamicLayout>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* Section Cards */}
        <SectionCards />
        
        {/* Chart */}
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>

        {/* Advanced Data Table */}
        <div className="px-4 lg:px-6">
          <DataTableAdvanced data={data} />
        </div>
      </div>
    </DynamicLayout>
  )
}
