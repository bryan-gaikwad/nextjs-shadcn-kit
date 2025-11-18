"use client"

import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteHeader } from "@/components/layout/site-header"
import { TopNavigation } from "@/components/navigation/top-navigation"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useNavigation } from "@/context/navigation-context"

export function DynamicLayout({ children }) {
  const { navMode } = useNavigation()

  if (navMode === 'topnav') {
    return (
      <div className="min-h-screen bg-background">
        <TopNavigation />
        <main className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 p-4 md:gap-6 md:p-6">
            {children}
          </div>
        </main>
      </div>
    )
  }

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" collapsible="icon" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
